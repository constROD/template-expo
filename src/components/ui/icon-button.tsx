import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';

import { SPACINGS } from '@/constants/theme';

type IconButtonProps = {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  onPress: () => void;
};

export function IconButton({ onPress, icon, size = 'md' }: IconButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.iconButton, styles[`size-${size}`]]}>{icon}</View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  'size-sm': {
    padding: SPACINGS.xs,
  },
  'size-md': {
    padding: SPACINGS.sm,
  },
  'size-lg': {
    padding: SPACINGS.md,
  },
});
