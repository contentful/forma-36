import React from 'react';

import TextInput, { TextInputProps } from './TextInput';
import Button from './../Button';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';

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

const ControlledTextInput = (args: TextInputProps) => {
  const textInputRef = React.createRef<HTMLInputElement>();
  return (
    <>
      <TextInput
        value={args.value}
        width={args.width}
        name="emailInput"
        id="emailInput"
        required={args.required}
        error={args.error}
        disabled={args.disabled}
        maxLength={args.maxLength}
        inputRef={textInputRef}
      />
      <Button
        onClick={() => (textInputRef.current as HTMLInputElement).focus()}
      >
        Focus TextInput with ref
      </Button>
    </>
  );
};

export const basic = (args: TextInputProps) => (
  <TextInput
    value={args.value}
    width={args.width}
    name="emailInput"
    id="emailInput"
    required={args.required}
    error={args.error}
    disabled={args.disabled}
    maxLength={args.maxLength}
  />
);

export const controlledTextInput = (args: TextInputProps) => (
  <ControlledTextInput {...args} />
);

export const overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">
        Text input default with placeholder
      </SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextInput
        value=""
        maxLength={50}
        name="emailInput"
        id="emailInput"
        placeholder="Placeholder text"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Text input default</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextInput
        value="123456"
        maxLength={50}
        name="emailInput"
        id="emailInput"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Text input width small</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextInput
        value="123456"
        maxLength={50}
        width="small"
        name="emailInput"
        id="emailInput"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Text input width medium</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextInput
        value="123456"
        maxLength={50}
        width="medium"
        name="emailInput"
        id="emailInput"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Text input width large</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextInput
        value="123456"
        maxLength={50}
        width="large"
        name="emailInput"
        id="emailInput"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Text input with error</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextInput
        error
        value="123456"
        maxLength={50}
        width="large"
        name="emailInput"
        id="emailInput"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Text input disabled</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <TextInput
        disabled
        value="123456"
        maxLength={50}
        width="large"
        name="emailInput"
        id="emailInput"
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Text input with copy button</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
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
basic.args = {
  width: 'full',
  value: '123456',
  required: false,
  error: false,
  disabled: false,
  maxLength: 50,
};
