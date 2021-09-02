import React from 'react';

import { FormControl, FormControlInternalProps, TextInput } from '../src';

export default {
  title: 'Form Elements/FormControl',
  component: FormControl,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: FormControlInternalProps) => {
  return (
    <FormControl {...args}>
      <FormControl.Label isRequired>Name</FormControl.Label>
      <TextInput />
      <FormControl.HelpText>Please enter your first name</FormControl.HelpText>
    </FormControl>
  );
};

Basic.args = {};
