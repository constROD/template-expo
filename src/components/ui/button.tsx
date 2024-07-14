import React from 'react';
import { Pressable, type View, type PressableProps, type ViewProps } from 'react-native';
import { StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';

import { BORDER_RADIUS, COLORS, SPACINGS } from '@/constants/theme';

type ButtonProps = ViewProps &
  PressableProps & {
    children: React.ReactNode;
    color?: 'primary' | 'danger';
    variant?: 'default' | 'outline';
  };

const Button = React.forwardRef<View, ButtonProps>(
  ({ children, variant = 'default', color = 'primary', ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        {...props}
        style={({ pressed }) => [
          styles.baseButton,
          pressed && { opacity: 0.8 },
          variant === 'default' && color === 'primary' && styles['v-default-c-primary'],
          variant === 'default' && color === 'danger' && styles['v-default-c-danger'],
          variant === 'outline' && color === 'primary' && styles['v-outline-c-primary'],
          variant === 'outline' && color === 'danger' && styles['v-outline-c-danger'],
          props.disabled && { opacity: 0.5 },
          props.style,
        ]}
      >
        <ThemedText
          style={[
            { textAlign: 'center' },
            variant === 'default' && { color: COLORS.white },
            variant === 'outline' && color === 'primary' && { color: COLORS.primary },
            variant === 'outline' && color === 'danger' && { color: COLORS.danger },
          ]}
        >
          {children}
        </ThemedText>
      </Pressable>
    );
  }
);

export { Button };

const styles = StyleSheet.create({
  baseButton: {
    paddingHorizontal: SPACINGS.md,
    paddingVertical: SPACINGS.sm,
    borderRadius: BORDER_RADIUS.sm,
  },
  'v-default-c-primary': {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
  },
  'v-default-c-danger': {
    color: COLORS.white,
    backgroundColor: COLORS.danger,
  },
  'v-outline-c-primary': {
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: COLORS.primary,
  },
  'v-outline-c-danger': {
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: COLORS.danger,
  },
});
