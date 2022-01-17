import React from 'react';
import { Select } from '@contentful/f36-components';

export default function SelectUncontrolledExample() {
  return (
    <Select
      id="optionSelect-uncontrolled"
      name="optionSelect-uncontrolled"
      defaultValue="optionOne"
    >
      <Select.Option value="optionOne">Option 1</Select.Option>{' '}
      {/* This option would be selected by default */}
      <Select.Option value="optionTwo">Long Option 2</Select.Option>
    </Select>
  );
}
