import React, { useState } from 'react';
import { Switch, Checkbox, Stack } from '@contentful/f36-components';

export default function SwitchUncontrolledExample() {
  const [cookiesState, setCookiesState] = useState(false);

  return (
    <Stack flexDirection="column">
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
    </Stack>
  );
}
