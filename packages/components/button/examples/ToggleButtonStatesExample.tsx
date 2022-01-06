import React from 'react';
import { ToggleButton, Stack } from '@contentful/f36-components';

export default function ToggleButtonStatesExample() {
  return (
    <Stack>
      <ToggleButton isActive onToggle={() => {}}>
        Active State
      </ToggleButton>
      <ToggleButton isDisabled onToggle={() => {}}>
        Disabled State
      </ToggleButton>
    </Stack>
  );
}
