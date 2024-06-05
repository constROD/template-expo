import { ScrollView, Text, View } from 'react-native';

import { useSamplesQuery } from '@/query/use-samples-query';

export function SampleList() {
  const { data = [], isLoading, isFetching } = useSamplesQuery();

  if (isLoading || isFetching)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <ScrollView className="flex flex-col gap-5">
      {data.map(sample => (
        <View className="flex flex-col gap-2" key={sample.id}>
          <Text>ID: {sample.id}</Text>
          <Text>TITLE: {sample.title}</Text>
          <Text>BODY: {sample.body}</Text>
          <Text>USERID: {sample.userId}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
