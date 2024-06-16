import React from 'react';
import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...props}
      style={[
        { backgroundColor: 'blue', paddingHorizontal: 12, paddingVertical: 10, borderRadius: 5 },
        props.style,
      ]}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>{children}</Text>
    </TouchableOpacity>
  );
});

export { Button };
