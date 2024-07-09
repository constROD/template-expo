import { router } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/components/ui/button';
import { ThemedText } from '@/components/ui/themed-text';

export default function Sample2Tab() {
  return (
    <View>
      <ThemedText>Sample 2 Tab</ThemedText>
      <Button onPress={() => router.replace('/')}>Go back to Home</Button>
    </View>
  );
}
