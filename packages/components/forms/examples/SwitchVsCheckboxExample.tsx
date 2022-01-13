import React, { useState } from 'react';
import { Switch, Checkbox } from '@contentful/f36-components';

export default function SwitchUncontrolledExample() {
  const [cookiesState, setCookiesState] = useState(false);

  return (
    <>
      <Switch
        name="switch-cookies-choice"
        id="switch-cookies-choice"
        isChecked={cookiesState}
        onChange={() => setCookiesState((prevState) => !prevState)}
      >
        Allow cookies
      </Switch>
      <Checkbox
        name="checkbox-cookies-choice"
        id="checkbox-cookies-choice"
        isChecked={cookiesState}
        onChange={() => setCookiesState((prevState) => !prevState)}
      >
        Allow cookies
      </Checkbox>
    </>
  );
}
