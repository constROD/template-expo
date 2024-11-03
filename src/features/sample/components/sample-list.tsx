import { ScrollView, Text, View } from 'react-native';

import { useSamplesQuery } from '../hooks/query/use-samples-query';

export function SampleList() {
  const { data = [], isLoading, isFetching } = useSamplesQuery();

  if (isLoading || isFetching)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: 'column',
        padding: 10,
      }}
    >
      {data.map(sample => (
        <View
          key={sample.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <Text>ID: {sample.id}</Text>
          <Text>TITLE: {sample.title}</Text>
          <Text>BODY: {sample.body}</Text>
          <Text>USERID: {sample.userId}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
