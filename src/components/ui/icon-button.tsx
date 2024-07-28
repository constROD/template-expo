import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import { SPACINGS } from '@/constants/theme';

type IconButtonProps = {
  onPress: () => void;
  icon: React.ReactNode;
};

export function IconButton({ onPress, icon }: IconButtonProps) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    padding: SPACINGS.xs,
  },
});
