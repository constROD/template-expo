import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { SafeScrollView } from '@/components/safe-scroll-view';
import { Alert } from '@/components/ui/alert';
import { AlertDialog } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { CheckBox } from '@/components/ui/checkbox';
import { Dialog } from '@/components/ui/dialog';
import { IconButton } from '@/components/ui/icon-button';
import { Input } from '@/components/ui/input';
import { RadioButton } from '@/components/ui/radio-button';
import { Select } from '@/components/ui/select';
import { ThemedText } from '@/components/ui/themed-text';
import { ToggleButtonGroup } from '@/components/ui/toggle-button-group';
import { ToggleSwitch } from '@/components/ui/toggle-switch';
import { COLORS, FONT_SIZES, SPACINGS } from '@/constants/theme';

export default function UIPreviewPage() {
  const [inputValue, setInputValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogOpenBottom, setDialogOpenBottom] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [selectValue, setSelectValue] = useState('');
  const [toggleOption, setToggleOption] = useState('Option 1');

  const selectOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <SafeScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <ThemedText style={styles.title}>UI Components Preview</ThemedText>

        <ThemedText style={styles.sectionTitle}>Buttons</ThemedText>
        <Button onPress={() => Alert.success('Default button pressed!')}>Default Button</Button>
        <Button
          variant="outline"
          color="danger"
          onPress={() => Alert.error('Danger button pressed!')}
        >
          Outline Danger Button
        </Button>

        <ThemedText style={styles.sectionTitle}>Button Sizes</ThemedText>
        <Button size="sm" onPress={() => Alert.info('Small button pressed!')}>
          Small Button
        </Button>
        <Button size="md" onPress={() => Alert.info('Medium button pressed!')}>
          Medium Button
        </Button>
        <Button size="lg" onPress={() => Alert.info('Large button pressed!')}>
          Large Button
        </Button>

        <ThemedText style={styles.sectionTitle}>Inputs</ThemedText>
        <Input
          size="sm"
          label="Small Input"
          variant="outline"
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter text"
        />
        <Input
          size="md"
          label="Medium Input"
          variant="outline"
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter text"
        />
        <Input
          size="lg"
          label="Large Input"
          variant="outline"
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter text"
        />

        <ThemedText style={styles.sectionTitle}>Checkboxes</ThemedText>
        <CheckBox
          size="sm"
          label="Small Checkbox"
          value={checkboxValue}
          onValueChange={setCheckboxValue}
        />
        <CheckBox
          size="md"
          label="Medium Checkbox"
          value={checkboxValue}
          onValueChange={setCheckboxValue}
        />
        <CheckBox
          size="lg"
          label="Large Checkbox"
          value={checkboxValue}
          onValueChange={setCheckboxValue}
        />

        <ThemedText style={styles.sectionTitle}>Switches</ThemedText>
        <ToggleSwitch
          size="sm"
          label="Small Switch"
          value={switchValue}
          onValueChange={setSwitchValue}
        />
        <ToggleSwitch
          size="md"
          label="Medium Switch"
          value={switchValue}
          onValueChange={setSwitchValue}
        />
        <ToggleSwitch
          size="lg"
          label="Large Switch"
          value={switchValue}
          onValueChange={setSwitchValue}
        />

        <ThemedText style={styles.sectionTitle}>Icon Buttons</ThemedText>
        <View style={styles.iconButtonContainer}>
          <IconButton
            size="sm"
            onPress={() => Alert.info('Small icon button pressed!')}
            icon={<ThemedText>🔔</ThemedText>}
          />
          <IconButton
            size="md"
            variant="outline"
            onPress={() => Alert.info('Medium icon button pressed!')}
            icon={<ThemedText>🔔</ThemedText>}
          />
          <IconButton
            size="lg"
            variant="ghost"
            onPress={() => Alert.info('Large icon button pressed!')}
            icon={<ThemedText>🔔</ThemedText>}
          />
        </View>

        <ThemedText style={styles.sectionTitle}>Radio Buttons</ThemedText>
        <View>
          <RadioButton
            size="sm"
            label="Small Radio Option 1"
            value={radioValue === 'option1'}
            onValueChange={() => setRadioValue('option1')}
            name="radioGroup"
          />
          <RadioButton
            size="md"
            label="Medium Radio Option 2"
            value={radioValue === 'option2'}
            onValueChange={() => setRadioValue('option2')}
            name="radioGroup"
          />
          <RadioButton
            size="lg"
            label="Large Radio Option 3"
            value={radioValue === 'option3'}
            onValueChange={() => setRadioValue('option3')}
            name="radioGroup"
          />
        </View>

        <ThemedText style={styles.sectionTitle}>Select Dropdown</ThemedText>
        <Select
          label="Select an option"
          options={selectOptions}
          value={selectValue}
          onValueChange={setSelectValue}
        />

        <ThemedText style={styles.sectionTitle}>Toggle Buttons</ThemedText>
        <ToggleButtonGroup
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
          value={toggleOption}
          onValueChange={setToggleOption}
          size="sm"
        />
        <ToggleButtonGroup
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
          value={toggleOption}
          onValueChange={setToggleOption}
          size="md"
        />
        <ToggleButtonGroup
          options={[
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
            { label: 'Option 3', value: 'option3' },
          ]}
          value={toggleOption}
          onValueChange={setToggleOption}
          size="lg"
          color="danger"
        />

        <ThemedText style={styles.sectionTitle}>Dialogs</ThemedText>
        <Button onPress={() => setAlertDialogOpen(true)}>Open Alert Dialog</Button>
        <AlertDialog
          open={alertDialogOpen}
          title="Alert Dialog"
          description="This is an example of an alert dialog."
          onCancel={() => setAlertDialogOpen(false)}
          onConfirm={() => {
            setAlertDialogOpen(false);
            Alert.success('Alert dialog confirmed!');
          }}
        />

        <Button onPress={() => setDialogOpen(true)}>Open Dialog</Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <View>
            <ThemedText>This is a custom dialog content.</ThemedText>
            <Button onPress={() => setDialogOpen(false)}>Close Dialog</Button>
          </View>
        </Dialog>

        <Button onPress={() => setDialogOpenBottom(true)}>Open Dialog</Button>
        <Dialog type="bottom" open={dialogOpenBottom} onClose={() => setDialogOpen(false)}>
          <View>
            <ThemedText>This is a custom bottom dialog content.</ThemedText>
            <Button onPress={() => setDialogOpenBottom(false)}>Close Dialog</Button>
          </View>
        </Dialog>
      </View>
    </SafeScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    padding: SPACINGS.md,
    gap: SPACINGS.md,
  },
  title: {
    fontSize: FONT_SIZES.xl,
    marginBottom: SPACINGS.lg,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    marginBottom: SPACINGS.md,
  },
  iconButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
