import { Checkbox, type CheckboxProps } from 'expo-checkbox';
import React from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { View } from 'react-native';

import { ThemedText } from './themed-text';

import { COLORS } from '@/constants/theme';

type BaseCheckboxProps = CheckboxProps & {
  checkboxLabel?: string;
  label?: string;
  error?: string;
};

// @ts-ignore
const BaseCheckbox = React.forwardRef<Checkbox, BaseCheckboxProps>(
  ({ error, label, ...props }, ref) => {
    return (
      <View>
        <View style={{ alignItems: 'center' }}>
          {/* @ts-ignore */}
          <Checkbox {...props} ref={ref} style={[{ marginRight: 8 }, props.style]} />
          <ThemedText style={{ color: 'black', textAlign: 'center' }}>{label}</ThemedText>
        </View>
        {error && <ThemedText style={{ color: COLORS.danger }}>{error}</ThemedText>}
      </View>
    );
  }
);

export type CheckBoxProps<TControl extends object> = BaseCheckboxProps & {
  name?: Path<TControl>;
  control?: Control<TControl>;
};

export function CheckBox<TControl extends object>({
  control,
  name,
  ...props
}: CheckBoxProps<TControl>) {
  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <BaseCheckbox onValueChange={onChange} value={value} {...props} />
        )}
      />
    );
  }

  return <BaseCheckbox {...props} />;
}
