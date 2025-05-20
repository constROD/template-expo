import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';

import { BORDER_RADIUS, COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';
import type { Option } from '@/types/common';

type BaseSelectProps = {
  options: Option[];
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
  onValueChange?: (value: string) => void;
};

const pickerItemStyles = {
  sm: { fontSize: FONT_SIZES.sm, marginLeft: -8 },
  md: { fontSize: FONT_SIZES.md, marginLeft: -5 },
  lg: { fontSize: FONT_SIZES.lg, marginLeft: -2 },
};

const BaseSelect = React.forwardRef<Picker<string>, BaseSelectProps>(
  (
    {
      label,
      options,
      error,
      size = 'md',
      value,
      defaultValue,
      disabled,
      placeholder = 'Select',
      onValueChange,
    },
    ref
  ) => {
    return (
      <View>
        {label && <ThemedText style={styles.label}>{label}</ThemedText>}
        <View style={[styles.select, styles[`select-${size}`], disabled && styles.disabled]}>
          <Picker
            ref={ref}
            selectedValue={value ?? defaultValue ?? ''}
            onValueChange={onValueChange}
            style={[styles.picker, pickerItemStyles[size]]}
            enabled={!disabled}
          >
            <Picker.Item
              label={placeholder}
              value=""
              style={{ ...pickerItemStyles[size], color: COLORS.foreground }}
            />
            {options.map(option => (
              <Picker.Item
                key={option.value}
                label={option.label}
                value={option.value}
                style={{ ...pickerItemStyles[size], color: COLORS.foreground }}
                enabled={!disabled}
              />
            ))}
          </Picker>
        </View>
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}
      </View>
    );
  }
);

export type SelectProps<TControl extends object> = BaseSelectProps & {
  name?: Path<TControl>;
  control?: Control<TControl>;
};

export function Select<TControl extends object>({
  control,
  name,
  ...props
}: SelectProps<TControl>) {
  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <BaseSelect {...props} onValueChange={onChange} value={value} />
        )}
      />
    );
  }

  return <BaseSelect {...props} />;
}

const styles = StyleSheet.create({
  label: {
    fontSize: FONT_SIZES.sm,
    marginBottom: SPACINGS.xs,
    color: COLORS['input-label'],
  },
  select: {
    backgroundColor: COLORS['input-bg'],
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    justifyContent: 'center',
  },
  'select-sm': {
    height: 32,
  },
  'select-md': {
    height: 38,
  },
  'select-lg': {
    height: 44,
  },
  picker: {},
  error: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.danger,
    marginTop: SPACINGS.xs,
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: COLORS['input-label'],
  },
});
