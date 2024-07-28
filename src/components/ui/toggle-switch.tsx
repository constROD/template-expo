import { forwardRef } from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { Switch, View, type SwitchProps, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';

import { COLORS, SPACINGS } from '@/constants/theme';

type BaseSwitchProps = SwitchProps & {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
};

const BaseSwitch = forwardRef<Switch, BaseSwitchProps>(({ label, size = 'md', ...props }, ref) => {
  return (
    <View style={styles.container}>
      <ThemedText style={[styles.label, styles[`label-${size}`]]}>{label}</ThemedText>
      <Switch
        {...props}
        ref={ref}
        trackColor={{ false: '#767577', true: COLORS.primary }}
        thumbColor={props.value ? COLORS.white : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        style={[styles[`switch-${size}`], props.style]}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    marginRight: SPACINGS.sm,
  },
  'label-sm': {
    fontSize: 12,
  },
  'label-md': {
    fontSize: 14,
  },
  'label-lg': {
    fontSize: 16,
  },
  'switch-sm': {
    transform: [{ scale: 0.8 }],
  },
  'switch-md': {
    transform: [{ scale: 1 }],
  },
  'switch-lg': {
    transform: [{ scale: 1.2 }],
  },
});
