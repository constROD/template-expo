import React from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { View, Pressable, StyleSheet } from 'react-native';

import { ThemedText } from './themed-text';

import { BORDER_RADIUS, COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';

type BaseToggleButtonGroupProps = {
  options: string[];
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'danger';
  value?: string;
  onValueChange?: (value: string) => void;
};

const BaseToggleButtonGroup = React.forwardRef<View, BaseToggleButtonGroupProps>(
  ({ options, value, onValueChange, size = 'md', color = 'primary' }, ref) => {
    return (
      <View ref={ref} style={[styles.container, styles[`container-${color}`]]}>
        {options.map(option => (
          <Pressable
            key={option}
            style={({ pressed }) => [
              styles.button,
              styles[`button-${size}`],
              value === option && styles[`activeButton-${color}`],
              pressed && { opacity: 0.8 },
            ]}
            onPress={() => onValueChange?.(option)}
          >
            <ThemedText
              style={[
                styles.buttonText,
                styles[`buttonText-${size}`],
                styles[`buttonText-${color}`],
                value === option && styles.activeButtonText,
              ]}
            >
              {option}
            </ThemedText>
          </Pressable>
        ))}
      </View>
    );
  }
);

export type ToggleButtonGroupProps<TControl extends object> = BaseToggleButtonGroupProps & {
  name?: Path<TControl>;
  control?: Control<TControl>;
};

export function ToggleButtonGroup<TControl extends object>({
  control,
  name,
  ...props
}: ToggleButtonGroupProps<TControl>) {
  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <BaseToggleButtonGroup onValueChange={onChange} value={value} {...props} />
        )}
      />
    );
  }

  return <BaseToggleButtonGroup {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 1,
    overflow: 'hidden',
  },
  'container-primary': {
    borderColor: COLORS.primary,
  },
  'container-danger': {
    borderColor: COLORS.danger,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  'button-sm': {
    paddingVertical: SPACINGS.xs,
  },
  'button-md': {
    paddingVertical: SPACINGS.sm,
  },
  'button-lg': {
    paddingVertical: SPACINGS.md,
  },
  'activeButton-primary': {
    backgroundColor: COLORS.primary,
  },
  'activeButton-danger': {
    backgroundColor: COLORS.danger,
  },
  buttonText: {
    textAlign: 'center',
  },
  'buttonText-primary': {
    color: COLORS.primary,
  },
  'buttonText-danger': {
    color: COLORS.danger,
  },
  'buttonText-sm': {
    fontSize: FONT_SIZES.sm,
  },
  'buttonText-md': {
    fontSize: FONT_SIZES.md,
  },
  'buttonText-lg': {
    fontSize: FONT_SIZES.lg,
  },
  activeButtonText: {
    color: COLORS.white,
  },
});
