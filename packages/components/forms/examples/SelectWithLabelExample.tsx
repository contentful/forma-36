import React from 'react';
import { Select, FormControl } from '@contentful/f36-components';

export default function SelectWithLabelExample() {
  return (
    <FormControl as="fieldset">
      <FormControl.Label as="legend">Label for select</FormControl.Label>
      <Select id="optionSelect" name="optionSelect">
        <Select.Option value="optionOne">Option 1</Select.Option>
        <Select.Option value="optionTwo">Long Option 2</Select.Option>
      </Select>
      <FormControl.HelpText>Select one of the options</FormControl.HelpText>
    </FormControl>
  );
}
