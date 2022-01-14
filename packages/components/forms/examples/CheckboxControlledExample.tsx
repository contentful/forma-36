import React, { useState } from 'react';
import { Checkbox } from '@contentful/f36-components';

export default function CheckboxControlledExample() {
  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <Checkbox
      name="newsletter-subscribe-controlled"
      id="newsletter-subscribe-controlled"
      isChecked={checkboxState}
      onChange={() => setCheckboxState(!checkboxState)}
    >
      Subscribe to newsletter
    </Checkbox>
  );
}
