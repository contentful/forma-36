import React, { useState } from 'react';
import { Radio, Stack } from '@contentful/f36-components';

export default function RadioGroupExample() {
  const [value, setValue] = useState('no');
  return (
    <Stack flexDirection="row">
      <Radio
        id="radio1"
        name="radio-controlled"
        value="yes"
        isChecked={value === 'yes'}
        onChange={() => setValue('yes')}
      >
        Yes
      </Radio>
      <Radio
        id="radio2"
        name="radio-controlled"
        value="no"
        isChecked={value === 'no'}
        onChange={() => setValue('no')}
      >
        No
      </Radio>
    </Stack>
  );
}
