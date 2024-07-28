import { router } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/components/ui/button';
import { ThemedText } from '@/components/ui/themed-text';

export default function Sample1Tab() {
  return (
    <View>
      <ThemedText>Sample 1 Tab</ThemedText>
      <Button onPress={() => router.push('/')}>Go back to Home</Button>
    </View>
  );
}
