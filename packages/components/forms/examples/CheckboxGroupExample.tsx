import React from 'react';
import { FormControl, Checkbox, Paragraph } from '@contentful/f36-components';

export default function CheckboxGroupExample() {
  return (
    <FormControl as="fieldset">
      <FormControl.Label as="legend" marginBottom="none">
        Checkbox group options
      </FormControl.Label>
      <Paragraph>Subtitle with more information if needed</Paragraph>
      <Checkbox.Group name="checkbox-options" defaultValue={['option 1']}>
        <Checkbox
          name="checkbox-options"
          value="option 1"
          id="option-1"
          helpText="Some help text"
        >
          Option 1
        </Checkbox>
        <Checkbox
          name="checkbox-options"
          value="option 2"
          id="option-2"
          helpText="Another help text"
        >
          Option 2
        </Checkbox>
      </Checkbox.Group>
    </FormControl>
  );
}
