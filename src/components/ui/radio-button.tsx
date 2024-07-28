import React from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { Pressable, View, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';

import { ThemedText } from './themed-text';

import { COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';

type BaseRadioButtonProps = {
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  value?: boolean;
  style?: StyleProp<ViewStyle>;
  onValueChange?: (value: boolean) => void;
};

const BaseRadioButton = React.forwardRef<View, BaseRadioButtonProps>(
  ({ error, label, size = 'md', value, onValueChange, ...props }, ref) => {
    const handlePress = () => {
      if (onValueChange) {
        onValueChange(!value);
      }
    };

    return (
      <View>
        <Pressable onPress={handlePress} style={styles.container}>
          <View
            ref={ref}
            style={[
              styles.radio,
              styles[`radio-${size}`],
              value ? styles.radioChecked : styles.radioUnchecked,
              props.style,
            ]}
          >
            {value && <View style={[styles.innerCircle, styles[`innerCircle-${size}`]]} />}
          </View>
          <ThemedText style={[styles.label, styles[`label-${size}`]]}>{label}</ThemedText>
        </Pressable>
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}
      </View>
    );
  }
);

export type RadioButtonProps<TControl extends object> = BaseRadioButtonProps & {
  name?: Path<TControl>;
  control?: Control<TControl>;
};

export function RadioButton<TControl extends object>({
  control,
  name,
  ...props
}: RadioButtonProps<TControl>) {
  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <BaseRadioButton {...props} value={value} onValueChange={onChange} />
        )}
      />
    );
  }

  return <BaseRadioButton {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    borderWidth: 2,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACINGS.sm,
  },
  radioChecked: {
    borderColor: COLORS.primary,
  },
  radioUnchecked: {
    borderColor: COLORS.gray,
  },
  innerCircle: {
    backgroundColor: COLORS.primary,
    borderRadius: 999,
  },
  'radio-sm': {
    width: 20,
    height: 20,
  },
  'radio-md': {
    width: 24,
    height: 24,
  },
  'radio-lg': {
    width: 28,
    height: 28,
  },
  'innerCircle-sm': {
    width: 12,
    height: 12,
  },
  'innerCircle-md': {
    width: 16,
    height: 16,
  },
  'innerCircle-lg': {
    width: 20,
    height: 20,
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
