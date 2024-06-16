import { Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps;

export function ThemedText({ ...props }: ThemedTextProps) {
  return <Text {...props} style={[{ fontFamily: 'Poppins_400Regular' }, props.style]} />;
}
