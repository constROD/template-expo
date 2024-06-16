import React, { forwardRef } from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { TextInput as RNTextInput, View, type TextInputProps } from 'react-native';

import { ThemedText } from './themed-text';

import { THEME_COLORS } from '@/constants/theme';

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
          ref={ref}
          secureTextEntry={type === 'password'}
          {...props}
          style={[
            {
              height: 38,
              paddingHorizontal: 12,
              paddingVertical: 10,
              backgroundColor: 'white',
              borderRadius: 6,
              fontSize: 14,
            },
            props.style,
          ]}
        />
        {error && (
          <ThemedText style={{ fontSize: 12, color: THEME_COLORS.danger }}>{error}</ThemedText>
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
