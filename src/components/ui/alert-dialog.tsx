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
  confirmColor?: 'primary' | 'danger';
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export function AlertDialog({
  open,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  confirmColor = 'primary',
  loading = false,
  onCancel,
  onConfirm,
}: AlertDialogProps) {
  return (
    <Dialog open={open} onClose={onCancel} preventCloseOnClickOutside>
      <View style={styles.container}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <ThemedText style={styles.description}>{description}</ThemedText>
        <View style={styles.buttonContainer}>
          <Button variant="outline" onPress={onCancel} disabled={loading} fullWidth>
            {cancelLabel}
          </Button>
          <Button onPress={onConfirm} loading={loading} color={confirmColor} fullWidth>
            {confirmLabel}
          </Button>
        </View>
      </View>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACINGS.xl,
  },
  title: {
    ...FONTS.bold,
    fontSize: FONT_SIZES.xl,
  },
  description: {
    fontSize: FONT_SIZES.md,
  },
  buttonContainer: {
    gap: SPACINGS.md,
  },
});
