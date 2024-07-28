import React from 'react';
import { View, Modal, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native';

import { BORDER_RADIUS, SPACINGS } from '@/constants/theme';

interface DialogProps {
  children: React.ReactNode;
  open: boolean;
  type?: 'bottom' | 'popup';
  closeOnOutsideClick?: boolean;
  onClose: () => void;
}

export function Dialog({
  children,
  open,
  type = 'popup',
  closeOnOutsideClick = true,
  onClose,
}: DialogProps) {
  const handleOutsideClick = () => {
    if (closeOnOutsideClick) {
      onClose();
    }
  };

  return (
    <Modal
      transparent
      visible={open}
      animationType={type === 'bottom' ? 'slide' : 'fade'}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handleOutsideClick}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.content, type === 'bottom' ? styles.bottomSheet : styles.popup]}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'white',
    padding: SPACINGS.md,
    borderRadius: BORDER_RADIUS.sm,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: BORDER_RADIUS.sm,
    borderTopRightRadius: BORDER_RADIUS.sm,
    maxHeight: height * 0.8,
  },
  popup: {
    width: width * 0.9,
    maxHeight: height * 0.8,
  },
});
