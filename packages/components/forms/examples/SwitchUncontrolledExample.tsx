import React from 'react';
import { Switch } from '@contentful/f36-components';

export default function SwitchUncontrolledExample() {
  return (
    <Switch
      name="allow-cookies-uncontrolled"
      id="allow-cookies-uncontrolled"
      defaultChecked={true}
    >
      Allow cookies
    </Switch>
  );
}
