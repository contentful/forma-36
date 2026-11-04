import React, { useState } from 'react';
import { ToggleButton } from '@contentful/f36-components';
import { GearSixIcon } from '@contentful/f36-icons';

export default function ToggleButtonTransparentExample() {
  const [isActive, setIsActive] = useState(false);

  return (
    <ToggleButton
      icon={<GearSixIcon />}
      isActive={isActive}
      onToggle={() => setIsActive(!isActive)}
      size="tiny"
      variant="transparent"
    >
      Settings
    </ToggleButton>
  );
}
