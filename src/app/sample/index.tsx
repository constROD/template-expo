import { View, ScrollView } from 'react-native';

import { ThemedText } from '@/components/ui/themed-text';
import { AddSampleForm } from '@/features/sample/components/add-sample-form';
import { SampleList } from '@/features/sample/components/sample-list';
import { useSampleStore } from '@/hooks/stores/use-sample-store';

export default function SamplePage() {
  const { data } = useSampleStore();

  // eslint-disable-next-line no-console
  console.log('Sample Store Data: ', data);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          padding: 20,
        }}
      >
        <ThemedText style={{ fontSize: 18, marginBottom: 20 }}>This is User Page</ThemedText>
        <AddSampleForm />
        <SampleList />
      </View>
    </ScrollView>
  );
}
