import React from 'react';
import { SectionHeading } from '@contentful/f36-typography';
import { TextInput, TextInputProps } from './TextInput';
import { Button } from '@contentful/f36-button';
import { Flex } from '@contentful/f36-core';

export default {
  title: 'Form Elements/TextInput',
  component: TextInput,
  parameters: {
    propTypes: [TextInput['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    isReadOnly: { control: { disable: true } },
    onChange: { control: { disable: true } },
    onBlur: { control: { disable: true } },
    onCopy: { control: { disable: true } },
    onKeyPress: { control: { disable: true } },
  },
};

export const Basic = (args: TextInputProps) => <TextInput {...args} />;

Basic.args = {
  name: 'text-input',
  labelText: 'text-input-label-text',
  id: 'text-input',
};

export const ControlledTextInput = (args: TextInputProps) => {
  const textInputRef = React.createRef<HTMLInputElement>();

  return (
    <>
      <TextInput {...args} inputRef={textInputRef} />
      <Flex marginTop="spacingL">
        <Button onClick={() => textInputRef.current.focus()}>
          Focus Textinput with ref
        </Button>
      </Flex>
    </>
  );
};

ControlledTextInput.args = {
  name: 'text-input',
  labelText: 'text-input-label-text',
  id: 'text-input',
};

export const Overview = () => (
  <>
    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Text input default with placeholder
      </SectionHeading>
      <TextInput
        value=""
        maxLength={50}
        name="emailInput"
        id="emailInput"
        placeholder="Placeholder text"
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Text input default
      </SectionHeading>

      <TextInput
        value="123456"
        maxLength={50}
        name="emailInput"
        id="emailInput"
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Text input width small
      </SectionHeading>

      <TextInput
        value="123456"
        maxLength={50}
        width="small"
        name="emailInput"
        id="emailInput"
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Text input width medium
      </SectionHeading>

      <TextInput
        value="123456"
        maxLength={50}
        width="medium"
        name="emailInput"
        id="emailInput"
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Text input width large
      </SectionHeading>

      <TextInput
        value="123456"
        maxLength={50}
        width="large"
        name="emailInput"
        id="emailInput"
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Text input with error
      </SectionHeading>
      <TextInput
        error
        value="123456"
        maxLength={50}
        width="large"
        name="emailInput"
        id="emailInput"
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Text input disabled
      </SectionHeading>
      <TextInput
        disabled
        value="123456"
        maxLength={50}
        width="large"
        name="emailInput"
        id="emailInput"
      />
    </Flex>

    <Flex flexDirection="column" marginBottom="spacingXl">
      <SectionHeading as="h3" marginBottom="spacingS">
        Text input with copy button
      </SectionHeading>

      <TextInput
        withCopyButton
        value="123456"
        maxLength={50}
        width="large"
        name="emailInput"
        id="emailInput"
      />
    </Flex>
  </>
);
