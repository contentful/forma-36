import React from 'react';
import { FormControl, Checkbox } from '@contentful/f36-components';

export default function FormControlCheckboxGroupExample() {
  return (
    <FormControl as="fieldset" isRequired>
      <FormControl.Label as="legend">Checkbox group options</FormControl.Label>
      <Checkbox.Group name="checkbox-options">
        <Checkbox value="option 1" id="option-1" helpText="Some help text">
          Option 1
        </Checkbox>
        <Checkbox value="option 2" id="option-2" helpText="Another help text">
          Option 2
        </Checkbox>
      </Checkbox.Group>
      <FormControl.HelpText>
        Please, select at least one option
      </FormControl.HelpText>
    </FormControl>
  );
}
