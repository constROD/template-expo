import { Checkbox, type CheckboxProps } from 'expo-checkbox';
import React from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { Text, View } from 'react-native';

type BaseCheckboxProps = CheckboxProps & {
  checkboxLabel?: string;
  label?: string;
  error?: string;
};

const BaseCheckbox = React.forwardRef<Checkbox, BaseCheckboxProps>(
  ({ error, label, style, ...props }, ref) => {
    return (
      <View>
        <View className="item-center flex-row">
          <Checkbox style={[{ marginRight: 8 }, style]} ref={ref} {...props} />
          <Text className="text-sm font-medium text-black">{label}</Text>
        </View>
        {error && <Text className="text-sm text-red-500">{error}</Text>}
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
