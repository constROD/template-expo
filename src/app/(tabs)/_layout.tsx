import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="sample-1"
        options={{
          headerTitle: 'Sample Tab 1',
        }}
      />
      <Tabs.Screen
        name="sample-2"
        options={{
          headerTitle: 'Sample Tab 2',
        }}
      />
    </Tabs>
  );
}
