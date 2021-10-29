import React from 'react';
import { IconButton, Button } from '@contentful/f36-button';
import { LockIcon } from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { TextInput, InputGroup, InputGroupProps } from '../src';

export default {
  title: 'Form Elements/InputGroup',
  component: InputGroup,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: InputGroupProps) => {
  return (
    <InputGroup {...args}>
      <TextInput
        aria-label="Text Input"
        id="TextInput1"
        defaultValue="Some value"
      />
      <IconButton variant="secondary" icon={<LockIcon />} aria-label="Lock" />
    </InputGroup>
  );
};

Basic.args = {
  spacing: 'none',
};

export const Overview = () => {
  return (
    <Flex flexDirection="column" fullWidth>
      <SectionHeading as="h3" marginBottom="spacingS">
        Input group spaced
      </SectionHeading>
      <Flex marginBottom="spacingM" fullWidth>
        <InputGroup spacing="spacingS">
          <Button variant="primary">Button</Button>
          <TextInput
            aria-label="Text Input"
            id="TextInput1"
            defaultValue="Some value"
          />
          <IconButton
            variant="secondary"
            icon={<LockIcon />}
            aria-label="Lock"
          />
        </InputGroup>
      </Flex>
      <Flex marginBottom="spacingM" fullWidth>
        <InputGroup spacing="spacingS">
          <Button variant="primary">Button</Button>
          <TextInput
            aria-label="Text Input"
            id="TextInput2"
            defaultValue="Some value"
          />
        </InputGroup>
      </Flex>
      <Flex marginBottom="spacingL" fullWidth>
        <InputGroup spacing="spacingS">
          <TextInput
            aria-label="Text Input"
            id="TextInput3"
            defaultValue="Some value"
          />
          <IconButton
            variant="secondary"
            icon={<LockIcon />}
            aria-label="Lock"
          />
        </InputGroup>
      </Flex>
      <SectionHeading as="h3" marginBottom="spacingS">
        Input group collapsed
      </SectionHeading>
      <Flex marginBottom="spacingM" fullWidth>
        <InputGroup>
          <Button variant="primary">Button</Button>
          <TextInput
            aria-label="Text Input"
            id="TextInput4"
            defaultValue="Some value"
          />
          <IconButton
            variant="secondary"
            icon={<LockIcon />}
            aria-label="Lock"
          />
        </InputGroup>
      </Flex>
      <Flex marginBottom="spacingM" fullWidth>
        <InputGroup>
          <Button variant="primary">Button</Button>
          <TextInput
            aria-label="Text Input"
            id="TextInput5"
            defaultValue="Some value"
          />
        </InputGroup>
      </Flex>
      <Flex marginBottom="spacingL" fullWidth>
        <InputGroup>
          <TextInput
            aria-label="Text Input"
            id="TextInput6"
            defaultValue="Some value"
          />
          <IconButton
            variant="secondary"
            icon={<LockIcon />}
            aria-label="Lock"
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
};
