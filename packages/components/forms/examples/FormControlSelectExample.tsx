import React from 'react';
import { FormControl, Select } from '@contentful/f36-components';

export default function FormControlSelectExample() {
  return (
    <FormControl>
      <FormControl.Label>Name</FormControl.Label>
      <Select defaultValue="optionTwo">
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo">Option 2</Select.Option>
      </Select>
      <FormControl.HelpText>Please select an option</FormControl.HelpText>
    </FormControl>
  );
}
