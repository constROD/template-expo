import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Button } from './button';
import { Dialog } from './dialog';
import { ThemedText } from './themed-text';

import { FONT_SIZES, FONTS, SPACINGS } from '@/constants/theme';

interface AlertDialogProps {
  open: boolean;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function AlertDialog({
  open,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onClose,
  onConfirm,
}: AlertDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} closeOnOutsideClick={false}>
      <View style={styles.container}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.description}>{description}</ThemedText>
        <View style={styles.buttonContainer}>
          <Button variant="outline" onPress={onClose}>
            {cancelLabel}
          </Button>
          <Button onPress={onConfirm}>{confirmLabel}</Button>
        </View>
      </View>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACINGS.md,
  },
  title: {
    ...FONTS.bold,
    fontSize: FONT_SIZES.xl,
  },
  description: {
    fontSize: FONT_SIZES.md,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: SPACINGS.md,
  },
});
