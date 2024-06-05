import { Text, View } from 'react-native';

import { AddSampleForm } from '@/features/sample/components/add-sample-form';
import { SampleList } from '@/features/sample/components/sample-list';
import { useSampleStore } from '@/stores/use-sample-store';

export default function SamplePage() {
  const { data } = useSampleStore();

  // eslint-disable-next-line no-console
  console.log('Sample Store Data: ', data);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>This is User Page</Text>
      <AddSampleForm />
      <SampleList />
    </View>
  );
}
