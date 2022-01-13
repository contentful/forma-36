import React from 'react';
import { Flex, Checkbox } from '@contentful/f36-components';

export default function CheckboxCheckedOrIndeterminateExample() {
  return (
    <Flex flexDirection="column">
      <Checkbox id="checkbox1" name="checked-option-1" defaultChecked>
        Option 1 (uncontrolled checked)
      </Checkbox>
      <Checkbox
        id="checkbox1"
        name="controlled-option-2"
        isChecked
        onChange={() => {}}
      >
        Option 2 (controlled checked)
      </Checkbox>
      <Checkbox id="checkbox2" name="indeterminate-option-3" isIndeterminate>
        Option 3 (indeterminate)
      </Checkbox>
    </Flex>
  );
}
