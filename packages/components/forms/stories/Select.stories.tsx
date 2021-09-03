import React from 'react';

import { Select, SelectProps } from '../src';

export default {
  title: 'Form Elements/Select',
  component: Select,
};

export const basic = (args: SelectProps) => (
  <Select id="optionSelect" name="optionSelect" {...args}>
    <Select.Option value="optionOne">Option 1</Select.Option>
    <Select.Option value="optionTwo" isSelected>
      Option 2
    </Select.Option>
    <Select.Option value="optionThree" isDisabled>
      Disabled option
    </Select.Option>
  </Select>
);
