// import axios from 'axios';
// import { useSegments, useRouter } from 'expo-router';
import { createContext, useContext, type ReactNode, useState, useMemo } from 'react';

// import { ROUTES } from '@/constants/routes';
// import { envConfig } from '@/env';
// import { usePrevious } from '@/hooks/use-previous';

interface AuthContextType {
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  // useEffect(() => {
  //   axios
  //     .get(`${envConfig.API_URL}/auth/verify-session`)
  //     .then(response => {
  //       setAccessToken(response.data.access_token);
  //     })
  //     .catch(error => {
  //       // eslint-disable-next-line no-console
  //       console.error(error);
  //     });
  // }, []);

  // useAppChecker(accessToken);

  const contextValue = useMemo(
    () => ({ accessToken, setAccessToken }),
    [accessToken, setAccessToken]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// export function useAppChecker(accessToken: string | null) {
//   const segments = useSegments();
//   const router = useRouter();

//   const currentSegment = segments[0];

//   const prevSegment = usePrevious(currentSegment);

//   useEffect(() => {
//     const inPublicGroup = currentSegment === '(public)';
//     const inProtectedGroup =
//       currentSegment === '(user)' || currentSegment === '(admin)' ;

//     if (!accessToken && inProtectedGroup) {
//       router.replace(ROUTES.AUTH.LOGIN);
//     } else if (
//       accessToken &&
//       !inProtectedGroup &&
//       !inPublicGroup &&
//       prevSegment !== currentSegment
//     ) {
//       router.replace(ROUTES.INDEX);
//     }
//   }, [accessToken, segments, router, prevSegment, currentSegment]);
// }
