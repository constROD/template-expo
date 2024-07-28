import React, { useState } from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { Dialog } from './dialog';
import { ThemedText } from './themed-text';

import { BORDER_RADIUS, COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';

type Option = {
  label: string;
  value: string;
};

type BaseSelectProps = {
  options: Option[];
  label?: string;
  placeholder?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  value?: string;
  onValueChange?: (value: string) => void;
};

const BaseSelect = React.forwardRef<TouchableOpacity, BaseSelectProps>(
  ({ label, placeholder, options, error, size = 'md', value, onValueChange }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(value);

    const selectedOption = options.find(option => option.value === (value ?? internalValue));

    const handleSelect = (option: Option) => {
      if (onValueChange) {
        onValueChange(option.value);
      } else {
        setInternalValue(option.value);
      }
      setIsOpen(false);
    };

    return (
      <View>
        {label && <ThemedText style={styles.label}>{label}</ThemedText>}
        <TouchableOpacity
          ref={ref}
          style={[styles.select, styles[`select-${size}`]]}
          onPress={() => setIsOpen(true)}
        >
          <ThemedText style={[styles.selectText, !selectedOption && styles.placeholder]}>
            {selectedOption ? selectedOption.label : placeholder || 'Select an option'}
          </ThemedText>
          <Text style={styles.chevron}>▼</Text>
        </TouchableOpacity>
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} type="bottom">
          <View style={styles.optionsContainer}>
            {options.map(option => (
              <TouchableOpacity
                key={option.value}
                style={styles.option}
                onPress={() => handleSelect(option)}
              >
                <ThemedText>{option.label}</ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </Dialog>
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
          <BaseSelect onValueChange={onChange} value={value} {...props} />
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
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  'select-sm': {
    height: 32,
    paddingHorizontal: SPACINGS.sm,
  },
  'select-md': {
    height: 38,
    paddingHorizontal: SPACINGS.md,
  },
  'select-lg': {
    height: 44,
    paddingHorizontal: SPACINGS.lg,
  },
  selectText: {
    fontSize: FONT_SIZES.md,
  },
  placeholder: {
    color: COLORS.gray,
  },
  error: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.danger,
    marginTop: SPACINGS.xs,
  },
  optionsContainer: {
    maxHeight: 300,
  },
  option: {
    padding: SPACINGS.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS['gray-bg'],
  },
  chevron: {
    fontSize: FONT_SIZES.md,
    color: COLORS.gray,
  },
});
