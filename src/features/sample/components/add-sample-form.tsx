import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { View } from 'react-native';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { CheckBox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { ToggleSwitch } from '@/components/ui/switch';
import { createSampleData } from '@/data/create-sample';

export const addSampleSchema = z.object({
  email: z.string().email().toLowerCase(),
  name: z.string().min(1),
  description: z.string().min(1),
  checkbox: z.boolean().refine(value => value === true, {
    message: 'User must agree',
  }),
  switch: z.boolean(),
});

export type AddSample = z.infer<typeof addSampleSchema>;

export const AddSampleForm = () => {
  const { control, handleSubmit, formState } = useForm<AddSample>({
    resolver: zodResolver(addSampleSchema),
  });

  const onSubmit: SubmitHandler<AddSample> = async data => {
    const createdSample = await createSampleData({
      title: data.email,
      body: data.description,
      userId: 1,
    });
    // eslint-disable-next-line no-console
    console.log(createdSample);
  };

  return (
    <View className="flex flex-col">
      <Input control={control} name="email" label="Email" error={formState.errors.email?.message} />
      <Input control={control} name="name" label="Name" error={formState.errors.name?.message} />
      <Input
        control={control}
        name="description"
        label="Description"
        error={formState.errors.description?.message}
      />
      <CheckBox
        control={control}
        name="checkbox"
        label="Check to agree"
        error={formState.errors.checkbox?.message}
      />
      <View>
        <ToggleSwitch label="sample switch" control={control} name="switch" />
      </View>
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
};
