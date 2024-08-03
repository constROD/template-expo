import React from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { BORDER_RADIUS, COLORS, SPACINGS } from '@/constants/theme';
import { TOAST_PROPS } from '@/constants/toast';

interface DialogProps {
  children: React.ReactNode;
  open: boolean;
  type?: 'bottom' | 'popup';
  preventCloseOnClickOutside?: boolean;
  fullHeight?: boolean;
  onClose: () => void;
}

export function Dialog({
  children,
  open,
  type = 'popup',
  preventCloseOnClickOutside = false,
  fullHeight = false,
  onClose,
}: DialogProps) {
  const handleOutsideClick = () => {
    if (!preventCloseOnClickOutside) {
      onClose();
    }
  };

  const toastProps = Platform.OS === 'ios' ? { ...TOAST_PROPS, topOffset: 100 } : {};

  return (
    <Modal
      transparent
      visible={open}
      animationType={type === 'bottom' ? 'slide' : 'fade'}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={handleOutsideClick}>
        <View style={styles.overlay}>
          <Toast {...toastProps} />
          <TouchableWithoutFeedback>
            <View
              style={[
                styles.content,
                type === 'bottom' ? styles.bottomSheet : styles.popup,
                fullHeight && { height: 99999 },
              ]}
            >
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
    zIndex: 999,
  },
  content: {
    backgroundColor: COLORS.white,
    padding: SPACINGS.lg,
    borderRadius: BORDER_RADIUS.sm,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: BORDER_RADIUS.sm,
    borderTopRightRadius: BORDER_RADIUS.sm,
    maxHeight: Platform.OS === 'ios' ? height * 0.8 : height * 0.85,
  },
  popup: {
    width: width * 0.9,
    maxHeight: height * 0.8,
  },
});
