import React from 'react';

import { TextInput, TextInputProps } from '../src';
import { TextLink } from '@contentful/f36-text-link';
import { LockIcon } from '@contentful/f36-icons';

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
  label: 'some label text???',
  validationMessage: 'validation message',
  helpText: 'help text',
  placeholder: 'this is my placeholder',
};
