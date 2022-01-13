import React from 'react';
import { Flex, Checkbox } from '@contentful/f36-components';

export default function CheckboxDisabledExample() {
  return (
    <Flex flexDirection="column">
      <Checkbox id="checkbox3" name="disabled-option-1" isDisabled>
        Option 1
      </Checkbox>
      <Checkbox id="checkbox4" name="disabled-option-2" isChecked isDisabled>
        Option 2 (checked)
      </Checkbox>
      <Checkbox
        id="checkbox5"
        name="disabled-option-3"
        isIndeterminate
        isDisabled
      >
        Option 3 (indeterminate)
      </Checkbox>
    </Flex>
  );
}
