import { Checkbox, type CheckboxProps } from 'expo-checkbox';
import React from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { View, StyleSheet, Pressable } from 'react-native';

import { ThemedText } from './themed-text';

import { COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';

type BaseCheckboxProps = CheckboxProps & {
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
};

// @ts-ignore
const BaseCheckbox = React.forwardRef<Checkbox, BaseCheckboxProps>(
  ({ error, label, size = 'md', ...props }, ref) => {
    const handlePress = () => {
      if (props.onValueChange) {
        props.onValueChange(!props.value);
      }
    };

    return (
      <View>
        <Pressable onPress={handlePress} style={styles.container}>
          <Checkbox
            {...props}
            // @ts-ignore
            ref={ref}
            style={[styles.checkbox, styles[`checkbox-${size}`], props.style]}
            color={props.value ? COLORS.primary : undefined}
          />
          <ThemedText style={[styles.label, styles[`label-${size}`]]}>{label}</ThemedText>
        </Pressable>
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: SPACINGS.sm,
  },
  'checkbox-sm': {
    width: 16,
    height: 16,
  },
  'checkbox-md': {
    width: 20,
    height: 20,
  },
  'checkbox-lg': {
    width: 24,
    height: 24,
  },
  label: {
    color: 'black',
  },
  'label-sm': {
    fontSize: FONT_SIZES.sm,
  },
  'label-md': {
    fontSize: FONT_SIZES.md,
  },
  'label-lg': {
    fontSize: FONT_SIZES.lg,
  },
  error: {
    color: COLORS.danger,
    fontSize: FONT_SIZES.sm,
    marginTop: SPACINGS.xs,
  },
});
