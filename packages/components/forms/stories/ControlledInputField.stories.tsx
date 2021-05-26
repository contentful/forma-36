import React, { useState } from 'react';

import { ControlledInputField, ControlledInputFieldProps } from '../src';

export default {
  title: 'Components/ControlledInputField',
  component: ControlledInputField,
  parameters: {
    propTypes: [ControlledInputField['__docgenInfo']],
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

export const Basic = (args: ControlledInputFieldProps) => {
  const [isActive, setActive] = useState(args.isChecked);
  return (
    <ControlledInputField
      {...args}
      name="someOtherOption"
      value="someOtherValue"
      isChecked={isActive}
      onChange={() => {
        setActive(!isActive);
      }}
      id="myField"
    />
  );
};

Basic.args = {
  label: 'some label text',
  validationMessage: 'validation message',
  helpText: 'help text',
};
