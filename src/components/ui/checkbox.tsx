import { Checkbox, type CheckboxProps } from 'expo-checkbox';
import React from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { Text, View } from 'react-native';

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
          <Checkbox ref={ref} style={[{ marginRight: 8 }, props.style]} {...props} />
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
            }}
          >
            {label}
          </Text>
        </View>
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
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
