import React, { forwardRef } from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { TextInput as RNTextInput, Text, View, type TextInputProps } from 'react-native';

import { cn } from '@/utils/classnames';

type BaseTextInputProps = TextInputProps & {
  label?: string;
  error?: string;
};

const BaseTextInput = forwardRef<RNTextInput, BaseTextInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <View>
        {label && <Text className="text-sm font-medium">{label}</Text>}
        <RNTextInput ref={ref} className={cn('text-black', className)} {...props} />
        {error && <Text className="text-sm text-red-500">{error}</Text>}
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
