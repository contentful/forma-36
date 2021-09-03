import React, { useState } from 'react';

import {
  FormControl,
  FormControlInternalProps,
  TextInput,
  Textarea,
  Form,
} from '../src';
import { Button } from '@contentful/f36-button';
import { Flex, Box } from '@contentful/f36-core';
import { TextLink } from '@contentful/f36-text-link';
import { LockIcon } from '@contentful/f36-icons';

export default {
  title: 'Form Elements/Form',
  component: FormControl,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: FormControlInternalProps) => {
  const [submited, setSubmit] = useState(false);
  const onSubmit = () => setSubmit(true);

  return (
    <Form onSubmit={() => onSubmit()}>
      <FormControl {...args}>
        <FormControl.Label isRequired>Name</FormControl.Label>
        <TextInput aria-label="input" />
        <FormControl.HelpText>
          Please enter your first name
        </FormControl.HelpText>
      </FormControl>

      <FormControl {...args}>
        <FormControl.Label>Description</FormControl.Label>
        <Textarea aria-label="input" />
        <FormControl.HelpText>Tell me about youself</FormControl.HelpText>
      </FormControl>
      <Button variant={'primary'} type="submit" isDisabled={submited}>
        {submited ? 'Sumbited' : 'Click me to submit'}
      </Button>
    </Form>
  );
};
