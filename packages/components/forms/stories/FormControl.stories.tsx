import React from 'react';

import {
  FormControl,
  FormControlInternalProps,
  TextInput,
  Textarea,
  Select,
  Checkbox,
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
        <TextInput />
        <FormControl.HelpText>
          Please enter your first name
        </FormControl.HelpText>
        {args.isInvalid && (
          <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
        )}
      </FormControl>

      <FormControl {...args}>
        <FormControl.Label>Description</FormControl.Label>
        <Textarea />
        <FormControl.HelpText>Tell me about youself</FormControl.HelpText>
        {args.isInvalid && (
          <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
        )}
      </FormControl>

      <FormControl {...args}>
        <FormControl.Label>City</FormControl.Label>
        <Select defaultValue="">
          <Select.Option value="" isDisabled>
            Please, select your city
          </Select.Option>
          <Select.Option value="berlin">Berlin</Select.Option>
          <Select.Option value="san-francisco">San Francisco</Select.Option>
        </Select>
      </FormControl>

      <FormControl {...args}>
        <Checkbox defaultChecked={false}>
          I confirm everything that said above is true
        </Checkbox>
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
              setIsDisabled((prevState) => !prevState);
            }}
          >
            {isDisabled ? 'Unlock to edit' : 'Lock'}
          </TextLink>
        </Box>
      </Flex>
      <TextInput aria-label="input" isDisabled={isDisabled} />
      <FormControl.HelpText>Please enter your first name</FormControl.HelpText>
      {args.isInvalid && (
        <FormControl.ValidationMessage>Error</FormControl.ValidationMessage>
      )}
    </FormControl>
  );
};
