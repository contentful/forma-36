import React, { useState } from 'react';

import { TextInput, TextInputProps } from '../src';
import { TextLink } from '@contentful/f36-text-link';
import { LockIcon } from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { SearchIcon } from '@contentful/f36-icons';
import { Button } from '@contentful/f36-button';

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
  return <TextInput {...args} name="Example name" id="input-1" />;
};

Basic.args = {
  label: 'Example label for input',
  placeholder: 'this is my placeholder',
};

export const InvalidTextInputWithValidationMessage = (args: TextInputProps) => {
  const [isInvalid, setIsInvalid] = useState(false);

  return (
    <Flex flexDirection="column">
      <TextInput
        {...args}
        name="Example name"
        id="input-1"
        isInvalid={isInvalid}
        validationMessage={isInvalid && 'this is my validation message'}
      />
      <Flex marginTop="spacingL">
        <Button variant="primary" onClick={() => setIsInvalid(true)}>
          click me to show validation message
        </Button>
      </Flex>
    </Flex>
  );
};

InvalidTextInputWithValidationMessage.args = {
  label: 'Example label for input',
  placeholder: 'this is my placeholder',
};

export const TextInputWithHelpText = (args: TextInputProps) => {
  return <TextInput {...args} name="Example name" id="input-1" />;
};

TextInputWithHelpText.args = {
  label: 'Example label for input',
  placeholder: 'this is my placeholder',
  helpText: 'Additional information about the input',
};

export const overview = () => (
  <Flex flexDirection="column">
    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input default
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="Example label for input"
        name="Input name"
        value="Example value"
        id="input-1"
        placeholder="My great input"
        isInvalid
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input field with validation message
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="Example label for input"
        name="Input name"
        value="Example value"
        id="input-1"
        isInvalid
        validationMessage="Great validation message"
        placeholder="My great input"
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input field with validation message and help text
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="Example label for input"
        name="Example name"
        value="Example value"
        id="input-1"
        isInvalid
        validationMessage="Great validation message"
        helpText="Very helpful additional information"
        placeholder="My great input"
        countCharacters
        maxLength={20}
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input disabled
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="Example label for input"
        name="Example name"
        value="Example value"
        id="input-1"
        placeholder="My great input"
        isDisabled
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with link
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="Example label for input"
        name="Example name"
        value="Example value"
        id="input-1"
        placeholder="My great input"
        link={
          <TextLink icon={<LockIcon />} href="https://f36.contentful.com/">
            go to link
          </TextLink>
        }
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with link and with icon
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="Example label for input"
        name="Example name"
        value="Example value"
        id="input-1"
        placeholder="My great input"
        icon={<SearchIcon />}
        link={
          <TextLink icon={<LockIcon />} href="https://f36.contentful.com/">
            go to link
          </TextLink>
        }
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with countCharacters and validation message
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="Example label for input"
        name="Example name"
        value="Example value"
        id="input-1"
        placeholder="My great input"
        countCharacters
        maxLength={20}
        validationMessage="It's great but you need to fix something"
        link={
          <TextLink icon={<LockIcon />} href="https://f36.contentful.com/">
            go to link
          </TextLink>
        }
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with copybutton
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="Example label for input"
        name="Example name"
        value="Example value"
        id="input-1"
        placeholder="My great input"
        countCharacters
        maxLength={20}
        validationMessage="It's great but you need to fix something"
        withCopyButton
        link={
          <TextLink icon={<LockIcon />} href="https://f36.contentful.com/">
            go to link
          </TextLink>
        }
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with copybutton that is disabled
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="Example label for input"
        name="Example name"
        value="Example value"
        id="input-1"
        placeholder="My great input"
        countCharacters
        maxLength={20}
        validationMessage="It's great but you need to fix something"
        withCopyButton
        isDisabled
        link={
          <TextLink icon={<LockIcon />} href="https://f36.contentful.com/">
            go to link
          </TextLink>
        }
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input standalone - no label - think twice before you use it
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="Example label for input"
        name="Example name"
        value="Example value"
        id="input-1"
        placeholder="My great input"
        isStandalone
        link={
          <TextLink icon={<LockIcon />} href="https://f36.contentful.com/">
            go to link
          </TextLink>
        }
      />
    </Flex>
  </Flex>
);
