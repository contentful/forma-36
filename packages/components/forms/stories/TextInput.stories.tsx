import React from 'react';

import { TextInput, TextInputProps } from '../src';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { SearchIcon } from '@contentful/f36-icons';

export default {
  title: 'Inputs/TextInput',
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
  size: 'medium',
};

export const Overview = () => (
  <Flex flexDirection="column">
    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input default
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Input name 1"
        id="input-1"
        placeholder="My great input"
        defaultValue="defaultValue"
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input default small
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Input name 2"
        id="input-2"
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
        name="Example name 3"
        id="input-3"
        placeholder="My great input"
        isDisabled
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input disabled small
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Example name 4"
        id="input-4"
        placeholder="My great input"
        isDisabled
        size="small"
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input invalid
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Example name 5"
        id="input-5"
        placeholder="My great input"
        isInvalid
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input invalid
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Example name 6"
        id="input-6"
        placeholder="My great input"
        isInvalid
        size="small"
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with icon as a placeholder
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Example name 7"
        value="Example value"
        id="input-7"
        placeholder="My great input"
        icon={<SearchIcon />}
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with icon as a placeholder small
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        aria-label="Example label for input"
        name="Example name 8"
        value="Example value"
        id="input-8"
        placeholder="My great input"
        icon={<SearchIcon />}
        size="small"
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Number input
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        name="Example name 12"
        id="input-12"
        type="number"
        placeholder="Number input"
        size="small"
      />
    </Flex>
  </Flex>
);
