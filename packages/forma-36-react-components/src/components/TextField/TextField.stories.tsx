import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex, Grid } from '@contentful/f36-core';
import { LockIcon } from '@contentful/f36-icons';

import { TextField, TextFieldProps } from './TextField';

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
    textInputProps: { control: { disable: true } },
    formLabelProps: { control: { disable: true } },
  },
};

interface Args extends TextFieldProps {
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
}

export const Basic = ({ placeholder, maxLength, disabled, ...args }: Args) => (
  <TextField {...args} textInputProps={{ placeholder, maxLength, disabled }} />
);

Basic.args = {
  id: 'basic-input',
  name: 'basic-input',
  labelText: 'Label text',
  placeholder: 'Placeholder text',
  maxLength: 100,
  disabled: false,
};

export const WithTextarea = ({
  placeholder,
  maxLength,
  disabled,
  ...args
}: Args) => (
  <TextField {...args} textInputProps={{ placeholder, maxLength }} textarea />
);

WithTextarea.args = {
  ...Basic.args,
};

export const WithTextLink = ({
  placeholder,
  maxLength,
  disabled,
  textLinkProps,
  ...args
}: Args) => (
  <TextField
    {...args}
    textInputProps={{ placeholder, maxLength }}
    textLinkProps={textLinkProps}
    textarea
  />
);

WithTextLink.args = {
  textLinkProps: {
    icon: <LockIcon />,
    children: 'Unlock to edit',
  },
  ...Basic.args,
};

export const Overview = (args: TextFieldProps) => (
  <Flex style={{ minWidth: '800px' }} flexDirection="column">
    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        TextField default
      </SectionHeading>

      <Grid columns="1fr 1fr" columnGap="spacingXl">
        <TextField {...args} />
        <TextField {...args} textarea />
      </Grid>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        TextField with countCharacters
      </SectionHeading>

      <Grid columns="1fr 1fr" columnGap="spacingXl">
        <TextField
          {...args}
          countCharacters
          textInputProps={{ maxLength: 50 }}
        />
        <TextField
          {...args}
          countCharacters
          textInputProps={{ maxLength: 50 }}
          textarea
        />
      </Grid>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        TextField with default value
      </SectionHeading>

      <Grid columns="1fr 1fr" columnGap="spacingXl">
        <TextField value="Example value" {...args} />
        <TextField value="Example value" {...args} textarea />
      </Grid>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        TextField with help text
      </SectionHeading>

      <Grid columns="1fr 1fr" columnGap="spacingXl">
        <TextField {...args} helpText="help text" />
        <TextField {...args} helpText="help text" textarea />
      </Grid>
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        TextField with validation message
      </SectionHeading>

      <Grid columns="1fr 1fr" columnGap="spacingXl">
        <TextField {...args} validationMessage="Validation message" />
        <TextField {...args} validationMessage="Validation message" textarea />
      </Grid>
    </Flex>

    <Flex flexDirection="column">
      <SectionHeading as="h3" marginBottom="spacingS">
        TextField disabled
      </SectionHeading>

      <Grid columns="1fr 1fr" columnGap="spacingXl">
        <TextField
          {...args}
          textInputProps={{
            disabled: true,
          }}
        />
        <TextField
          {...args}
          textInputProps={{
            disabled: true,
          }}
          textarea
        />
      </Grid>
    </Flex>
  </Flex>
);

Overview.args = {
  ...Basic.args,
};
