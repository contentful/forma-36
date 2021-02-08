import React from 'react';
import SelectField, { SelectFieldProps } from './SelectField';
import Option from '../Select/Option';

export default {
  title: 'Form Elements/SelectField',
  component: SelectField,
  parameters: {
    propTypes: [SelectField['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: SelectFieldProps) => (
  <SelectField {...args}>
    <Option value="optionOne">Option 1</Option>
    <Option value="optionTwo">Long Option 2</Option>
  </SelectField>
);

Basic.args = {
  formLabelProps: {
    requiredText: 'Required Text',
  },
  name: 'optionSelect',
  labelText: 'labelText',
  value: 'optionOne',
  selectProps: {
    width: 'full',
  },
  helpText: 'helpText',
};
