import React, { forwardRef } from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { TextInput as RNTextInput, View, type TextInputProps } from 'react-native';

import { ThemedText } from './themed-text';

import { BORDER_RADIUS, COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';

type BaseTextInputProps = TextInputProps & {
  type?: 'text' | 'password';
  label?: string;
  error?: string;
};

const BaseTextInput = forwardRef<RNTextInput, BaseTextInputProps>(
  ({ label, error, type, ...props }, ref) => {
    return (
      <View>
        {label && <ThemedText style={{ fontSize: 12, color: 'black' }}>{label}</ThemedText>}
        <RNTextInput
          {...props}
          ref={ref}
          secureTextEntry={type === 'password'}
          style={[
            {
              height: 38,
              paddingHorizontal: SPACINGS.md,
              paddingVertical: SPACINGS.sm,
              backgroundColor: COLORS.white,
              borderRadius: BORDER_RADIUS.sm,
              fontSize: FONT_SIZES.md,
            },
            props.style,
          ]}
        />
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
          <BaseTextInput onBlur={onBlur} onChangeText={onChange} value={value} {...props} />
        )}
      />
    );
  }

  return <BaseTextInput {...props} />;
}
