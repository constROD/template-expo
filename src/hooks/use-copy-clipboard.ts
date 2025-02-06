import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';

export function useCopyClipboard() {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
    const copiedText = await Clipboard.getStringAsync();
    setCopiedText(copiedText);
  };

  return {
    copiedText,
    copyToClipboard,
  };
}
