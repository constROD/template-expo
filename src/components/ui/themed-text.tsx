import { Text, type TextProps } from 'react-native';

import { COLORS, FONTS } from '@/constants/theme';

export type ThemedTextProps = TextProps;

export function ThemedText({ ...props }: ThemedTextProps) {
  return <Text {...props} style={[{ ...FONTS.regular, color: COLORS.foreground }, props.style]} />;
}
