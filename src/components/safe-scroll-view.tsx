import React, { forwardRef, useCallback, useState } from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  type ScrollViewProps,
} from 'react-native';

import { COLORS, SPACINGS } from '@/constants/theme';

type SafeScrollViewProps = ScrollViewProps & {
  children: React.ReactNode;
  refreshing?: boolean;
  onRefresh?: () => void;
};

export const SafeScrollView = forwardRef<ScrollView, SafeScrollViewProps>(
  ({ children, refreshing = false, onRefresh, ...props }, ref) => {
    return (
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <ScrollView
          ref={ref}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          {...props}
          contentContainerStyle={[styles.contentContainer, props.contentContainerStyle]}
        >
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
    paddingTop: SPACINGS.md,
    paddingBottom: 100,
  },
});

export type UseSafeScrollViewProps = {
  onRefresh: () => Promise<void>;
};

export function useSafeScrollView({ onRefresh }: UseSafeScrollViewProps) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefreshCallback = useCallback(async () => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  }, [onRefresh]);

  return {
    refreshing,
    onRefresh: onRefreshCallback,
  };
}
