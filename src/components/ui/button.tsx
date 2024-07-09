import React from 'react';
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';

import { COLORS } from '@/constants/theme';

type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
  color?: 'primary' | 'danger';
  variant?: 'default' | 'outline';
};

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({ children, variant = 'default', color = 'primary', ...props }, ref) => {
    return (
      <TouchableOpacity
        {...props}
        ref={ref}
        style={[
          styles.baseButton,
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
      </TouchableOpacity>
    );
  }
);

export { Button };

const styles = StyleSheet.create({
  baseButton: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5,
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
