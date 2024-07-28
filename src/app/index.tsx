import { router } from 'expo-router';
import { View } from 'react-native';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

export default function HomePage() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        gap: 10,
        padding: 10,
      }}
    >
      <Button style={{ width: '100%' }} onPress={() => router.push(ROUTES.SAMPLE)}>
        Go to Sample Page
      </Button>
      <Button style={{ width: '100%' }} onPress={() => router.push('/(tabs)/sample-1')}>
        Sample Tab 1
      </Button>
      <Button style={{ width: '100%' }} onPress={() => router.push('/(tabs)/sample-2')}>
        Sample Tab 2
      </Button>
      <Button style={{ width: '100%' }} onPress={() => router.push('/(modals)/sample-modal-1')}>
        Sample Modal 1
      </Button>
      <Button style={{ width: '100%' }} onPress={() => router.push('/(modals)/sample-modal-2')}>
        Sample Modal 2
      </Button>
    </View>
  );
}
