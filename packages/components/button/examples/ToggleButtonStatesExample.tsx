import React from 'react';
import { ToggleButton, Stack } from '@contentful/f36-components';

export default function ToggleButtonStatesExample() {
  return (
    <Stack>
      <ToggleButton isActive onToggle={() => {}}>
        Active Toggle Button
      </ToggleButton>
      <ToggleButton isDisabled onToggle={() => {}}>
        Disabled Toggle Button
      </ToggleButton>
    </Stack>
  );
}
