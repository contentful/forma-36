import React from 'react';

import TextField, { TextFieldProps } from './TextField';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';

export default {
  title: 'Form Elements/TextField',
  component: TextField,
  parameters: {
    propTypes: [TextField['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    isReadOnly: { control: { disable: true } },
    onChange: { control: { disable: true } },
    onBlur: { control: { disable: true } },
    onCopy: { control: { disable: true } },
    onFocus: { control: { disable: true } },
    onKeyPress: { control: { disable: true } },
    textLinkProps: { control: { disable: true } },
  },
};

export const Basic = (args: TextFieldProps) => (
  <TextField name="emailInput" id="emailInput" {...args} />
);

Basic.args = {
  width: 'full',
  maxLength: 50,
  labelText: 'Label text',
  textInputProps: {
    placeholder: 'Placeholder text',
    maxLength: 50,
    type: 'text',
  },
};

export const WithTextarea = (args: TextFieldProps) => (
  <TextField textarea {...args} />
);

WithTextarea.args = {
  ...Basic.args,
};

export const WithTextLink = (args: TextFieldProps) => (
  <TextField textarea {...args} />
);

WithTextLink.args = {
  textLinkProps: {
    icon: 'Lock',
    text: 'Unlock to edit',
  },
  ...Basic.args,
};

export const Overview = (args: TextFieldProps) => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">
        Textarea field default with countCharacters
      </SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextField countCharacters {...args} />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">
        Textarea field default with value
      </SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextField value="Example value" {...args} />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">
        Textarea field default with help text
      </SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextField {...args} helpText="help text" />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Textarea field error</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextField {...args} validationMessage="validationMessage" />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Textarea field disabled</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextField
        {...args}
        textInputProps={{
          disabled: true,
        }}
      />
    </Flex>
  </>
);

Overview.args = {
  ...Basic.args,
};
