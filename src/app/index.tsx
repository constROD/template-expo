import { Link } from 'expo-router';
import { View } from 'react-native';

export default function HomePage() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Link href="/sample">Go to Sample Page</Link>
    </View>
  );
}
