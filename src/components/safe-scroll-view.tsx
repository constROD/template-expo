import React, { forwardRef } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, type ScrollViewProps } from 'react-native';

import { COLORS, SPACINGS } from '@/constants/theme';

interface SafeScrollViewProps extends ScrollViewProps {
  children: React.ReactNode;
}

export const SafeScrollView = forwardRef<ScrollView, SafeScrollViewProps>(
  ({ children, ...props }, ref) => {
    return (
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <ScrollView ref={ref} contentContainerStyle={styles.contentContainer} {...props}>
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }
);

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: SPACINGS.xl,
    paddingHorizontal: SPACINGS.xl,
    paddingTop: SPACINGS.xl,
    paddingBottom: 100,
  },
});
