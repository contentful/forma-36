import React from 'react';

import { TextInput, TextInputProps } from '../src';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { SearchIcon } from '@contentful/f36-icons';

export default {
  title: 'Form Elements/TextInput',
  component: TextInput,
  args: {
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = (args: TextInputProps) => {
  return <TextInput {...args} />;
};

Basic.args = {
  placeholder: 'this is my placeholder',
  name: 'Example name',
  id: 'input-1',
};

export const Overview = () => (
  <Flex flexDirection="column">
    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input default
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Input name"
        id="input-1"
        placeholder="My great input"
        defaultValue="defaultValue"
        size="small"
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input disabled
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Example name"
        id="input-1"
        placeholder="My great input"
        isDisabled
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input invalid
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Example name"
        id="input-1"
        placeholder="My great input"
        isInvalid
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with icon as a placeholder
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Example name"
        value="Example value"
        id="input-1"
        placeholder="My great input"
        icon={<SearchIcon />}
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with copybutton
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Example name"
        id="input-1"
        placeholder="My great input"
        withCopyButton
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with copybutton disabled
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        name="Example name"
        id="input-1"
        placeholder="My great input"
        withCopyButton
        isDisabled
      />
    </Flex>
  </Flex>
);
