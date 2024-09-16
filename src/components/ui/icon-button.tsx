import React, { forwardRef } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';

import { SPACINGS } from '@/constants/theme';

type IconButtonProps = {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  onPress?: () => void;
};

export const IconButton = forwardRef<View, IconButtonProps>(
  ({ onPress, icon, size = 'md' }, ref) => {
    return (
      <Pressable onPress={onPress}>
        <View ref={ref} style={[styles.iconButton, styles[`size-${size}`]]}>
          {icon}
        </View>
      </Pressable>
    );
  }
);

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
