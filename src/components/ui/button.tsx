import React from 'react';
import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({ children, style, ...props }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          borderRadius: 5,
          margin: 5,
        }}
        {...props}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
          }}
        >
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
);

export { Button };
