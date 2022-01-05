import React, { useState } from 'react';
import { ToggleButton } from '@contentful/f36-components';
import { ThumbUpTrimmedIcon } from '@contentful/f36-icons';

export default function ToggleButtonBasicExample() {
  const [isActive, setIsActive] = useState(false);
  return (
    <ToggleButton
      isActive={isActive}
      onToggle={() => {
        setIsActive(!isActive);
      }}
      icon={<ThumbUpTrimmedIcon />}
    >
      Like
    </ToggleButton>
  );
}
