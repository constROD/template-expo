import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import { COLORS, SPACINGS } from '@/constants/theme';

export function SafeScrollView({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView contentContainerStyle={styles.contentContainer}>{children}</ScrollView>
    </SafeAreaView>
  );
}

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
