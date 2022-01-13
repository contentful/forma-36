import React from 'react';
import { Checkbox } from '@contentful/f36-components';

export default function CheckboxUncontrolledExample() {
  return (
    <Checkbox
      name="newsletter-subscribe-uncontrolled"
      id="newsletter-subscribe-uncontrolled"
      defaultChecked
    >
      Subscribe to newsletter
    </Checkbox>
  );
}
