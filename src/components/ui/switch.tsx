import { forwardRef } from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { Switch, View, type SwitchProps } from 'react-native';

import { ThemedText } from './themed-text';

type BaseSwitchProps = SwitchProps & {
  label?: string;
};

const BaseSwitch = forwardRef<Switch, BaseSwitchProps>(({ label, ...props }, ref) => {
  return (
    <View>
      <ThemedText style={{ alignSelf: 'center' }}>{label}</ThemedText>
      <Switch
        {...props}
        ref={ref}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        style={[{ marginLeft: 80 }, props.style]}
      />
    </View>
  );
});

export type ToggleSwitchProps<TControl extends object> = BaseSwitchProps & {
  name?: Path<TControl>;
  control?: Control<TControl>;
};

export function ToggleSwitch<TControl extends object>({
  control,
  name,
  ...props
}: ToggleSwitchProps<TControl>) {
  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <BaseSwitch onValueChange={onChange} value={value} {...props} />
        )}
      />
    );
  }

  return <BaseSwitch {...props} />;
}
