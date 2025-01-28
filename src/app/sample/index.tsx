import { View, ScrollView } from 'react-native';

import { ThemedText } from '@/components/ui/themed-text';
import { COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';
import { AddSampleForm } from '@/features/sample/_components/add-sample-form';
import { SampleList } from '@/features/sample/_components/sample-list';
import { useSampleStore } from '@/features/sample/_stores/use-sample-store';

export default function SamplePage() {
  const { data } = useSampleStore();

  // eslint-disable-next-line no-console
  console.log('Sample Store Data: ', data);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          alignItems: 'center',
          padding: SPACINGS.md,
        }}
      >
        <ThemedText style={{ fontSize: FONT_SIZES.lg, marginBottom: SPACINGS.md }}>
          This is User Page
        </ThemedText>
        <AddSampleForm />
        <SampleList />
      </View>
    </ScrollView>
  );
}
