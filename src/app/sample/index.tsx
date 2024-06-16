import { View } from 'react-native';

import { ThemedText } from '@/components/ui/themed-text';
import { AddSampleForm } from '@/features/sample/components/add-sample-form';
import { SampleList } from '@/features/sample/components/sample-list';
import { useSampleStore } from '@/hooks/stores/use-sample-store';

export default function SamplePage() {
  const { data } = useSampleStore();

  // eslint-disable-next-line no-console
  console.log('Sample Store Data: ', data);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <ThemedText>This is User Page</ThemedText>
      <AddSampleForm />
      <SampleList />
    </View>
  );
}
