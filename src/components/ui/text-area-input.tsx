import React, { forwardRef, useState } from 'react';
import { Controller, type Control, type Path } from 'react-hook-form';
import { TextInput as RNTextInput, View, type TextInputProps } from 'react-native';

import { ThemedText } from './themed-text';

import { BORDER_RADIUS, COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';

type BaseTextAreaInputProps = Omit<TextInputProps, 'multiline'> & {
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
  disabled?: boolean;
  rows?: number;
};

const textAreaStyles = {
  sm: {
    minHeight: 80,
    paddingHorizontal: SPACINGS.sm,
    paddingVertical: SPACINGS.xs,
    fontSize: FONT_SIZES.sm,
  },
  md: {
    minHeight: 100,
    paddingHorizontal: SPACINGS.md,
    paddingVertical: SPACINGS.sm,
    fontSize: FONT_SIZES.md,
  },
  lg: {
    minHeight: 120,
    paddingHorizontal: SPACINGS.lg,
    paddingVertical: SPACINGS.md,
    fontSize: FONT_SIZES.lg,
  },
};

const BaseTextAreaInput = forwardRef<RNTextInput, BaseTextAreaInputProps>(
  ({ label, error, size = 'md', variant = 'default', disabled, rows, ...props }, ref) => {
    const [height, setHeight] = useState(textAreaStyles[size].minHeight);

    const handleContentSizeChange = (event: {
      nativeEvent: { contentSize: { height: number } };
    }) => {
      setHeight(Math.max(textAreaStyles[size].minHeight, event.nativeEvent.contentSize.height));
    };

    return (
      <View style={[props.style]}>
        {label && (
          <ThemedText
            style={{
              fontSize: FONT_SIZES.sm,
              color: disabled ? COLORS.gray : COLORS.black,
              marginBottom: SPACINGS.xs,
            }}
          >
            {label}
          </ThemedText>
        )}
        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: BORDER_RADIUS.xs,
            borderWidth: variant === 'outline' ? 1 : 0,
            borderColor: variant === 'outline' ? COLORS.gray : 'transparent',
          }}
        >
          <RNTextInput
            {...props}
            ref={ref}
            multiline
            onContentSizeChange={handleContentSizeChange}
            numberOfLines={rows}
            placeholderTextColor={disabled ? COLORS.gray : COLORS.gray}
            style={{
              ...textAreaStyles[size],
              height,
              textAlignVertical: 'top',
              borderWidth: 0,
              color: disabled ? COLORS.gray : COLORS.black,
            }}
          />
        </View>
        {error && (
          <ThemedText
            style={{ fontSize: FONT_SIZES.sm, color: COLORS.danger, marginTop: SPACINGS.xs }}
          >
            {error}
          </ThemedText>
        )}
      </View>
    );
  }
);

export type TextAreaInputProps<TControl extends object> = BaseTextAreaInputProps & {
  name?: Path<TControl>;
  control?: Control<TControl>;
};

export function TextAreaInput<TControl extends object>({
  control,
  name,
  ...props
}: TextAreaInputProps<TControl>) {
  if (control && name) {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <BaseTextAreaInput {...props} onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
      />
    );
  }

  return <BaseTextAreaInput {...props} />;
}
