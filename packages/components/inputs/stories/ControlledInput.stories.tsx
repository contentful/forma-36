import React from 'react';

import { ControlledInput } from '..';
import { ControlledInputProps } from '..';

export default {
  title: 'Components/ControlledInput',
  component: ControlledInput,
  parameters: {
    propTypes: [ControlledInput['__docgenInfo']],
  },
  args: {
    type: 'radio',
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

export const basic = (args: ControlledInputProps) => (
  <ControlledInput {...args} />
);

basic.args = {
  size: 'default',
  variant: 'primary',
};
