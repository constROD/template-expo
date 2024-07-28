import { Stack } from 'expo-router';

export default function ModalLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sample-modal-1"
        options={{
          headerTitle: 'Sample Modal 1',
        }}
      />
      <Stack.Screen
        name="sample-modal-2"
        options={{
          headerTitle: 'Sample Modal 2',
        }}
      />
    </Stack>
  );
}
