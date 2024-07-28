import Toast, { type ToastType } from 'react-native-toast-message';

import { FONTS } from '@/constants/theme';

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
    text1Style: { ...FONTS.regular },
    text2Style: { ...FONTS.regular },
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
