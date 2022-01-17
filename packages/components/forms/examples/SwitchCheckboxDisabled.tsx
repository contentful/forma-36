import React from 'react';
import { Switch } from '@contentful/f36-components';

export default function SwitchUncontrolledExample() {
  return (
    <Switch
      id="include-cutlery"
      name="include-cutlery"
      defaultChecked={false}
      isDisabled
    >
      Include cutlery with your order.
    </Switch>
  );
}
