import React from 'react';
import { Select } from '@contentful/f36-components';

export default function SelectDisabledExample() {
  return (
    <Select id="optionSelect" name="optionSelect" isDisabled>
      <Select.Option value="optionOne">Option 1</Select.Option>
      <Select.Option value="optionTwo">Long Option 2</Select.Option>
    </Select>
  );
}
