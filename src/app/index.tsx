import { Link } from 'expo-router';
import { View } from 'react-native';

import { ThemedText } from '@/components/ui/themed-text';
import { ROUTES } from '@/constants/routes';

export default function HomePage() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <Link href={ROUTES.SAMPLE}>
        <ThemedText
          style={{
            fontFamily: 'Poppins_400Regular',
          }}
        >
          Go to Sample Page
        </ThemedText>
      </Link>
    </View>
  );
}
