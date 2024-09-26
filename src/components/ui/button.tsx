import React from 'react';
import {
  Pressable,
  StyleSheet,
  type View,
  type PressableProps,
  type ViewProps,
} from 'react-native';

import { ThemedText } from './themed-text';

import { BORDER_RADIUS, COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';

export type ButtonProps = ViewProps &
  PressableProps & {
    children: React.ReactNode;
    color?: 'primary' | 'danger';
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    fullWidth?: boolean;
  };

const Button = React.forwardRef<View, ButtonProps>(
  (
    {
      children,
      variant = 'default',
      color = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    return (
      <Pressable
        ref={ref}
        {...props}
        style={({ pressed }) => [
          styles.baseButton,
          styles[`size-${size}`],
          pressed && { opacity: 0.8 },
          variant === 'default' && color === 'primary' && styles['v-default-c-primary'],
          variant === 'default' && color === 'danger' && styles['v-default-c-danger'],
          variant === 'outline' && color === 'primary' && styles['v-outline-c-primary'],
          variant === 'outline' && color === 'danger' && styles['v-outline-c-danger'],
          variant === 'ghost' && styles['v-ghost'],
          fullWidth && styles.fullWidth,
          props.style,
          (loading || props.disabled) && styles.buttonOpacity,
        ]}
        disabled={props.disabled || loading}
      >
        <ThemedText
          style={[
            styles.buttonText,
            styles[`text-${size}`],
            variant === 'default' && { color: COLORS.white },
            variant === 'outline' && color === 'primary' && { color: COLORS.primary },
            variant === 'outline' && color === 'danger' && { color: COLORS.danger },
            variant === 'ghost' && color === 'primary' && { color: COLORS.primary },
            variant === 'ghost' && color === 'danger' && { color: COLORS.danger },
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
    borderRadius: BORDER_RADIUS.sm,
    alignSelf: 'flex-start',
  },
  'size-sm': {
    paddingHorizontal: SPACINGS.sm,
    paddingVertical: SPACINGS.xs,
  },
  'size-md': {
    paddingHorizontal: SPACINGS.md,
    paddingVertical: SPACINGS.sm,
  },
  'size-lg': {
    paddingHorizontal: SPACINGS.lg,
    paddingVertical: SPACINGS.md,
  },
  'text-sm': {
    fontSize: FONT_SIZES.sm,
  },
  'text-md': {
    fontSize: FONT_SIZES.md,
  },
  'text-lg': {
    fontSize: FONT_SIZES.lg,
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
  'v-ghost': {
    backgroundColor: 'transparent',
  },
  buttonOpacity: {
    opacity: 0.5,
  },
  buttonText: {
    textAlign: 'center',
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
});
