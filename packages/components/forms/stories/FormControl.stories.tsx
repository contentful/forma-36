import React from 'react';

import {
  FormControl,
  FormControlInternalProps,
  TextInput,
  Textarea,
} from '../src';
import { Flex, Box } from '@contentful/f36-core';
import { TextLink } from '@contentful/f36-text-link';
import { LockIcon } from '@contentful/f36-icons';

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
    <>
      <FormControl {...args}>
        <FormControl.Label isRequired>Name</FormControl.Label>
        <TextInput label="input" />
        <FormControl.HelpText>
          Please enter your first name
        </FormControl.HelpText>
        {args.isInvalid && (
          <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
        )}
      </FormControl>

      <FormControl {...args}>
        <FormControl.Label>Description</FormControl.Label>
        <Textarea label="input" />
        <FormControl.HelpText>Tell me about youself</FormControl.HelpText>
        {args.isInvalid && (
          <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
        )}
      </FormControl>
    </>
  );
};

export const Invalid = (args: FormControlInternalProps) => {
  return (
    <Basic {...args} isInvalid>
      {args.children}
    </Basic>
  );
};

export const WithCustomLogic = (args: FormControlInternalProps) => {
  const [isDisabled, setIsDisabled] = React.useState(true);
  return (
    <FormControl {...args} isDisabled={isDisabled}>
      <Flex justifyContent="space-between" alignItems="center">
        <FormControl.Label isRequired>Name</FormControl.Label>
        <Box marginBottom="spacingS">
            <TextLink
              as="button"
              icon={<LockIcon />}
              onClick={() => {
                setIsDisabled(prevState => !prevState);
              }}
            >
              {isDisabled ? 'Unlock to edit' : 'Lock'}
            </TextLink>
          )}
        </Box>
      </Flex>
      <TextInput label="input" isDisabled={isDisabled} />
      <FormControl.HelpText>Please enter your first name</FormControl.HelpText>
      {args.isInvalid && (
        <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
      )}
    </FormControl>
  );
};
