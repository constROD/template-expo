import React, { forwardRef } from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { TextInput as RNTextInput, View, type TextInputProps } from 'react-native';

import { ThemedText } from './themed-text';

import { BORDER_RADIUS, COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';

type BaseTextInputProps = TextInputProps & {
  type?: 'text' | 'password' | 'number';
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
};

const inputStyles = {
  sm: {
    height: 32,
    paddingHorizontal: SPACINGS.sm,
    paddingVertical: SPACINGS.xs,
    fontSize: FONT_SIZES.sm,
  },
  md: {
    height: 38,
    paddingHorizontal: SPACINGS.md,
    paddingVertical: SPACINGS.sm,
    fontSize: FONT_SIZES.md,
  },
  lg: {
    height: 44,
    paddingHorizontal: SPACINGS.lg,
    paddingVertical: SPACINGS.md,
    fontSize: FONT_SIZES.lg,
  },
};

const BaseTextInput = forwardRef<RNTextInput, BaseTextInputProps>(
  (
    {
      label,
      error,
      type,
      size = 'md',
      variant = 'default',
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <View style={[props.style]}>
        {label && (
          <ThemedText
            style={{
              fontSize: FONT_SIZES.sm,
              color: COLORS['input-label'],
            }}
          >
            {label}
          </ThemedText>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS['input-bg'],
            borderRadius: BORDER_RADIUS.xs,
            borderWidth: variant === 'outline' ? 1 : 0,
            borderColor: variant === 'outline' ? COLORS.border : 'transparent',
          }}
        >
          {leftIcon && (
            <View style={{ paddingLeft: SPACINGS.sm, opacity: disabled ? 0.5 : 1 }}>
              {leftIcon}
            </View>
          )}
          <RNTextInput
            {...props}
            ref={ref}
            secureTextEntry={type === 'password'}
            keyboardType={type === 'number' ? 'numeric' : 'default'}
            placeholderTextColor={COLORS['input-label']}
            style={{
              ...inputStyles[size],
              flex: 1,
              borderWidth: 0,
              color: disabled ? COLORS['input-label'] : COLORS.foreground,
            }}
          />
          {rightIcon && (
            <View style={{ paddingRight: SPACINGS.sm, opacity: disabled ? 0.5 : 1 }}>
              {rightIcon}
            </View>
          )}
        </View>
        {error && (
          <ThemedText style={{ fontSize: FONT_SIZES.sm, color: COLORS.danger }}>{error}</ThemedText>
        )}
      </View>
    );
  }
);

export type InputProps<TControl extends object> = BaseTextInputProps & {
  name?: Path<TControl>;
  control?: Control<TControl>;
};

export function Input<TControl extends object>({ control, name, ...props }: InputProps<TControl>) {
  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <BaseTextInput {...props} onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />
    );
  }

  return <BaseTextInput {...props} />;
}
