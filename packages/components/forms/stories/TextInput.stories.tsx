import React from 'react';

import { TextInput, TextInputProps } from '../src';
import { TextLink } from '@contentful/f36-text-link';
import { LockIcon } from '@contentful/f36-icons';
import { SectionHeading } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { SearchIcon } from '@contentful/f36-icons';

export default {
  title: 'Form Elements/TextInput',
  component: TextInput,
  parameters: {
    propTypes: [TextInput['__docgenInfo']],
  },
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
  return (
    <TextInput
      {...args}
      name="someOtherOption"
      value="someOtherValue"
      id="myField"
      link={
        <TextLink icon={<LockIcon />} href="https://f36.contentful.com/">
          go to link
        </TextLink>
      }
    />
  );
};

Basic.args = {
  label: 'some label text',
  validationMessage: 'validation message',
  helpText: 'help text',
  placeholder: 'this is my placeholder',
};

export const overview = () => (
  <Flex flexDirection="column">
    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input default
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="My amazing label"
        name="someOtherOption"
        value="someOtherValue"
        id="myField"
        placeholder="This is such a great input"
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input field with validation message
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="My amazing label"
        name="someOtherOption"
        value="someOtherValue"
        id="myField"
        isInvalid
        validationMessage="Great validation message"
        placeholder="This is such a great input"
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input field with validation message and help text
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="My amazing label"
        name="someOtherOption"
        value="someOtherValue"
        id="myField"
        isInvalid
        validationMessage="Great validation message"
        helpText="Very helpful addition information"
        placeholder="This is such a great input"
        countCharacters
        maxLength={20}
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input disabled
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="My amazing label"
        name="someOtherOption"
        value="someOtherValue"
        id="myField"
        placeholder="This is such a great input"
        isDisabled
      />
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Input with link
    </SectionHeading>

    <Flex marginBottom="spacingL">
      <TextInput
        label="My amazing label"
        name="someOtherOption"
        value="someOtherValue"
        id="myField"
        placeholder="This is such a great input"
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
        label="My amazing label"
        name="someOtherOption"
        value="someOtherValue"
        id="myField"
        placeholder="This is such a great input"
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
        label="My amazing label"
        name="someOtherOption"
        value="someOtherValue"
        id="myField"
        placeholder="This is such a great input"
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
        label="My amazing label"
        name="someOtherOption"
        value="someOtherValue"
        id="myField"
        placeholder="This is such a great input"
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
        label="My amazing label"
        name="someOtherOption"
        value="someOtherValue"
        id="myField"
        placeholder="This is such a great input"
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
        label="My amazing label"
        name="someOtherOption"
        value="someOtherValue"
        id="myField"
        placeholder="This is such a great input"
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
