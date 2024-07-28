import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { z } from 'zod';

import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { CheckBox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ThemedText } from '@/components/ui/themed-text';
import { ToggleSwitch } from '@/components/ui/toggle-switch';
import { createSampleData } from '@/data/create-sample';

export const addSampleFormSchema = z.object({
  email: z.string().email().toLowerCase(),
  name: z.string().min(1),
  description: z.string().min(1),
  checkbox: z.boolean().refine(value => value === true, {
    message: 'User must agree',
  }),
  switch: z.boolean(),
});

export type AddSampleFormSchema = z.infer<typeof addSampleFormSchema>;

export const AddSampleForm = () => {
  const { control, handleSubmit, formState } = useForm<AddSampleFormSchema>({
    resolver: zodResolver(addSampleFormSchema),
    defaultValues: {
      email: '',
      name: '',
      description: '',
      checkbox: false,
      switch: false,
    },
  });

  const onSubmit: SubmitHandler<AddSampleFormSchema> = async data => {
    try {
      const createdSample = await createSampleData({
        title: data.email,
        body: data.description,
        userId: 1,
      });
      Alert.success('Sample created successfully');
      // eslint-disable-next-line no-console
      console.log(createdSample);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      Alert.error('Failed to create sample');
    }
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Add Sample Form</ThemedText>
      <Input
        control={control}
        name="email"
        label="Email"
        error={formState.errors.email?.message}
        placeholder="Enter your email"
        style={styles.input}
      />
      <Input
        control={control}
        name="name"
        label="Name"
        error={formState.errors.name?.message}
        placeholder="Enter your name"
        style={styles.input}
      />
      <Input
        control={control}
        name="description"
        label="Description"
        error={formState.errors.description?.message}
        placeholder="Enter a description"
        multiline
        numberOfLines={3}
        style={styles.input}
      />
      <CheckBox
        control={control}
        name="checkbox"
        label="I agree to the terms and conditions"
        error={formState.errors.checkbox?.message}
        style={styles.checkbox}
      />
      <View style={styles.switchContainer}>
        <ThemedText>Enable notifications</ThemedText>
        <ToggleSwitch control={control} name="switch" />
      </View>
      <Button onPress={handleSubmit(onSubmit)} style={styles.button}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  checkbox: {
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});
