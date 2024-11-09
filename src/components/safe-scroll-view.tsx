import { useQueryClient } from '@tanstack/react-query';
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
  onRefresh?: () => Promise<void> | void;
};

export const SafeScrollView = forwardRef<ScrollView, SafeScrollViewProps>(
  ({ children, refreshing = false, onRefresh, ...props }, ref) => {
    const { refreshing: internalRefreshing, onRefresh: internalOnRefresh } = useSafeScrollView({
      onRefresh,
    });

    return (
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <ScrollView
          ref={ref}
          refreshControl={
            <RefreshControl refreshing={internalRefreshing} onRefresh={internalOnRefresh} />
          }
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
    backgroundColor: COLORS.background,
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
  onRefresh?: () => Promise<void> | void;
};

export function useSafeScrollView({ onRefresh }: UseSafeScrollViewProps = {}) {
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const onRefreshCallback = useCallback(async () => {
    setRefreshing(true);
    if (onRefresh) {
      await onRefresh();
    } else {
      await queryClient.invalidateQueries();
    }
    setRefreshing(false);
  }, [onRefresh]);

  return {
    refreshing,
    onRefresh: onRefreshCallback,
  };
}
