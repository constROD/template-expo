import { Link } from 'expo-router';
import { Text, View } from 'react-native';

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
        <Text
          style={{
            fontFamily: 'Poppins_400Regular',
          }}
        >
          Go to Sample Page
        </Text>
      </Link>
    </View>
  );
}
