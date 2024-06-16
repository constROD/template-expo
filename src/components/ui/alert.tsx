import Toast, { type ToastType } from 'react-native-toast-message';

type ToastMessageProps = {
  type: ToastType;
  message: string;
  subMessage?: string;
};

function toastMessage({ type, message, subMessage }: ToastMessageProps) {
  Toast.show({
    type,
    text1: message,
    text2: subMessage,
    text1Style: { fontFamily: 'Poppins_400Regular', fontWeight: 'regular' },
    text2Style: { fontFamily: 'Poppins_400Regular' },
  });
}

export const Alert = {
  success: (message: string, subMessage?: string) =>
    toastMessage({ type: 'success', message, subMessage }),
  error: (message: string, subMessage?: string) =>
    toastMessage({ type: 'error', message, subMessage }),
  info: (message: string, subMessage?: string) =>
    toastMessage({ type: 'info', message, subMessage }),
};
