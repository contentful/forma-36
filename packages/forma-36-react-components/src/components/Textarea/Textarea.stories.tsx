import React from 'react';

import Textarea, { TextareaProps } from './Textarea';
import Button from './../Button';
import SectionHeading from '../Typography/SectionHeading';
import Flex from '../Flex/Flex';

export default {
  title: 'Components/TextArea',
  component: Textarea,
  parameters: {
    propTypes: [Textarea['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    onBlur: { control: { disable: true } },
    onChange: { control: { disable: true } },
    required: { control: { disable: true } },
    error: { control: { disable: true } },
    disabled: { control: { disable: true } },
    maxLength: { control: { number: 50 } },
    rows: { control: { number: 2 } },
  },
};

const ControlledTextarea = () => {
  const textareaRef = React.createRef<HTMLTextAreaElement>();

  return (
    <React.Fragment>
      <Textarea name="someInput" id="someInput" textareaRef={textareaRef} />
      <Button
        onClick={() => (textareaRef.current as HTMLTextAreaElement).focus()}
      >
        Focus Textarea with ref
      </Button>
    </React.Fragment>
  );
};

export const basic = (args: TextareaProps) => (
  <Textarea
    name="someInput"
    id="someInput"
    width={args.width}
    value={args.value}
    required={args.required}
    error={args.error}
    disabled={args.disabled}
    maxLength={args.maxLength}
    rows={args.rows}
  />
);

export const controlFocusViaRef = () => <ControlledTextarea />;

export const overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Textarea default</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Textarea name="someInput" id="someInput" value="123456" rows={2} />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Textarea small width</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Textarea
        name="someInput"
        id="someInput"
        width="small"
        value="123456"
        rows={2}
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Textarea medium width</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Textarea
        name="someInput"
        id="someInput"
        width="medium"
        value="123456"
        rows={2}
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Textarea large width</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Textarea
        name="someInput"
        id="someInput"
        width="large"
        value="123456"
        rows={2}
      />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Textarea with error</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Textarea name="someInput" id="someInput" error value="123456" rows={2} />
    </Flex>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Textarea disabled</SectionHeading>
    </Flex>
    <Flex marginBottom="spacingS">
      <Textarea
        name="someInput"
        id="someInput"
        disabled
        value="123456"
        rows={2}
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
  rows: 2,
};
