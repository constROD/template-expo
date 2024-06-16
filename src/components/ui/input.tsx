import React, { forwardRef } from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { TextInput as RNTextInput, Text, View, type TextInputProps } from 'react-native';

type BaseTextInputProps = TextInputProps & {
  type?: 'text' | 'password';
  label?: string;
  error?: string;
};

const BaseTextInput = forwardRef<RNTextInput, BaseTextInputProps>(
  ({ label, error, type, ...props }, ref) => {
    return (
      <View>
        {label && <Text style={{ color: 'black' }}>{label}</Text>}
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
            },
            props.style,
          ]}
        />
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
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
