import React from 'react';
import { Radio, Stack } from '@contentful/f36-components';

export default function RadioUncontrolledExample() {
  return (
    <Stack flexDirection="row">
      <Radio
        id="radio1"
        name="radio-uncontrolled"
        value="yes"
        defaultChecked={true}
      >
        Yes
      </Radio>
      <Radio id="radio2" name="radio-uncontrolled" value="no">
        No
      </Radio>
    </Stack>
  );
}
