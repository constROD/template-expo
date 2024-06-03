import React from 'react';
import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import { cn } from '@/shared/utils/classnames';

type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

const Button = React.forwardRef<TouchableOpacity, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <TouchableOpacity
        className={cn('my-2 rounded bg-blue-500 px-4 py-2', className)}
        ref={ref}
        {...props}
      >
        <Text className="text-center text-white">{children}</Text>
      </TouchableOpacity>
    );
  }
);

export { Button };
