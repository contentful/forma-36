import React, { useState } from 'react';
import { Switch } from '@contentful/f36-components';

export default function SwitchControlledExample() {
  const [switchState, setSwitchState] = useState(false);

  return (
    <Switch
      name="allow-cookies-controlled"
      id="allow-cookies-controlled"
      isChecked={switchState}
      onChange={() => setSwitchState((prevState) => !prevState)}
    >
      Allow cookies
    </Switch>
  );
}
