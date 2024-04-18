import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { View } from 'react-native';
import { z } from 'zod';

import { Button } from '@/shared/components/ui/button';
import { CheckBox } from '@/shared/components/ui/checkbox';
import { Input } from '@/shared/components/ui/input';
import { ToggleSwitch } from '@/shared/components/ui/switch';

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

export type AddSampleFormProps = {
  onSubmit: SubmitHandler<AddSample>;
};

export const AddSampleForm = ({ onSubmit }: AddSampleFormProps) => {
  const { control, handleSubmit, formState } = useForm<AddSample>({
    resolver: zodResolver(addSampleSchema),
  });

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
      <Button label="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
