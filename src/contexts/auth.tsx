import { createContext, useContext, type ReactNode, useMemo, useEffect } from 'react';

export type AuthContextState = {
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // const router = useRouter();
  // const queryClient = useQueryClient();

  // const accessToken = useSessionStore(state => state.accessToken);
  // const actions = useSessionStore(state => ({
  //   setAccessToken: state.setAccessToken,
  //   reset: state.reset,
  // }));

  const logout = async () => {
    // await queryClient.resetQueries();
    // actions.reset();
    // router.replace(ROUTES.AUTH.LOGIN);
  };

  // const { refetch: refetchProfile } = useProfileQuery();
  // const { refetch: refetchFeatureFlags } = useFeatureFlagQuery();

  useEffect(
    () => {
      const verifySession = async () => {
        // try {
        //   const response = await privateAxios.get(`/auth/verify-session`);
        //   actions.setAccessToken(response.data.access_token);
        //   await Promise.all([refetchProfile(), refetchFeatureFlags()]);
        // } catch {
        //   actions.reset();
        //   await queryClient.resetQueries();
        // }
      };

      verifySession();
    },
    [
      /* accessToken */
    ]
  );

  const contextValue = useMemo(() => ({ logout }), [logout]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
}
