import React from 'react';
import { FormControl, Radio } from '@contentful/f36-components';

export default function FormControlRadioGroupExample() {
  return (
    <FormControl as="fieldset">
      <FormControl.Label as="legend">Radio group options</FormControl.Label>
      <Radio.Group name="radio-options" defaultValue="option 1">
        <Radio
          value="option 1"
          id="radio-option-1"
          helpText="Help text for option 1"
        >
          Option 1
        </Radio>
        <Radio
          value="option 2"
          id="radio-option-2"
          helpText="Help text for option 2"
        >
          Option 2
        </Radio>
      </Radio.Group>
      <FormControl.HelpText>Please, select an option</FormControl.HelpText>
    </FormControl>
  );
}
