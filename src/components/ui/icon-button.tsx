import React, { forwardRef } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, type ButtonProps } from './button';

import { SPACINGS } from '@/constants/theme';

type IconButtonProps = {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: ButtonProps['color'];
  variant?: ButtonProps['variant'];
  onPress?: () => void;
};

export const IconButton = forwardRef<View, IconButtonProps>(
  ({ icon, size = 'md', color = 'primary', variant = 'default', onPress }, ref) => {
    return (
      <Button color={color} variant={variant} onPress={onPress}>
        <View ref={ref} style={[styles.iconButton, styles[`size-${size}`]]}>
          {icon}
        </View>
      </Button>
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
