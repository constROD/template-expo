import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/ui/themed-text';
import { SPACINGS } from '@/constants/theme';

export default function NotFoundPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <ThemedText>This screen doesn't exist.</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText>Go to home screen!</ThemedText>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACINGS.xl,
  },
  link: {
    marginTop: SPACINGS.md,
    paddingVertical: SPACINGS.md,
  },
});
