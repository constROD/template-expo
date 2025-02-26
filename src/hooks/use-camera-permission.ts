import { useCameraPermissions } from 'expo-camera';

export function useCameraPermission() {
  const [permission, requestPermission] = useCameraPermissions();

  return {
    granted: permission?.granted,
    canAskAgain: permission?.canAskAgain ?? true,
    denied: permission?.status === 'denied',
    requestPermission,
  };
}
