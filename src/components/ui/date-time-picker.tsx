import RNDateTimePicker from '@react-native-community/datetimepicker';
import { ChevronDown, Calendar, Clock } from 'lucide-react-native';
import React, { useState, useCallback, forwardRef } from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { View, type TouchableOpacity, StyleSheet, Pressable } from 'react-native';

import { ThemedText } from '@/components/ui/themed-text';
import { BORDER_RADIUS, COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';
import { formatDateToMonthDayYear, formatDateToTime } from '@/utils/date-time';

interface BaseDateTimePickerFieldProps {
  label?: string;
  placeholder?: string;
  value?: Date;
  type?: 'date' | 'time';
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onChange?: (date: Date) => void;
}

const BaseDateTimePickerField = forwardRef<TouchableOpacity, BaseDateTimePickerFieldProps>(
  ({ label, value, error, type = 'date', size = 'md', disabled, placeholder, onChange }, ref) => {
    const [internalValue, setInternalValue] = useState<Date | undefined>(value);
    const [show, setShow] = useState(false);

    const handlePress = useCallback(() => setShow(true), []);

    const handleChange = useCallback(
      (_: unknown, selectedDate?: Date) => {
        setShow(false);
        if (selectedDate) {
          setInternalValue(selectedDate);
          onChange?.(selectedDate);
        }
      },
      [onChange]
    );

    const placeholderValue = placeholder ?? (type === 'date' ? 'Select Date' : 'Select Time');

    const displayValue = internalValue
      ? type === 'date'
        ? formatDateToMonthDayYear(internalValue)
        : formatDateToTime(internalValue)
      : placeholderValue;

    const actualValue = internalValue ?? new Date();

    return (
      <View style={styles.container}>
        {label && <ThemedText style={styles.label}>{label}</ThemedText>}
        <Pressable
          ref={ref}
          style={[styles.select, styles[`select-${size}`], disabled && styles.disabled]}
          onPress={handlePress}
          disabled={disabled}
        >
          {type === 'date' ? (
            <Calendar size={FONT_SIZES[size]} color={COLORS.gray} />
          ) : (
            <Clock size={FONT_SIZES[size]} color={COLORS.gray} />
          )}
          <ThemedText style={[styles.selectText, styles[`selectText-${size}`]]}>
            {displayValue}
          </ThemedText>
          <ChevronDown size={FONT_SIZES[size]} color={COLORS.gray} />
        </Pressable>
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}
        {show && (
          <RNDateTimePicker
            display="spinner"
            value={actualValue}
            mode={type}
            onChange={handleChange}
          />
        )}
      </View>
    );
  }
);

export type DateTimePickerFieldProps<TControl extends object> = BaseDateTimePickerFieldProps & {
  name?: Path<TControl>;
  control?: Control<TControl>;
};

export function DateTimePicker<TControl extends object>({
  control,
  name,
  ...props
}: DateTimePickerFieldProps<TControl>) {
  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <BaseDateTimePickerField {...props} onChange={onChange} value={value} />
        )}
      />
    );
  }

  return <BaseDateTimePickerField {...props} />;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: FONT_SIZES.sm,
    marginBottom: SPACINGS.xs,
    color: COLORS.gray,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
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
    flex: 1,
    paddingLeft: SPACINGS.sm,
    color: COLORS.gray,
  },
  'selectText-sm': {
    fontSize: FONT_SIZES.sm,
  },
  'selectText-md': {
    fontSize: FONT_SIZES.md,
  },
  'selectText-lg': {
    fontSize: FONT_SIZES.lg,
  },
  error: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.danger,
    marginTop: SPACINGS.xs,
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: COLORS['gray-bg'],
  },
});