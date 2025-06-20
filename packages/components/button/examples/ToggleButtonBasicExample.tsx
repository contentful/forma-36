import React, { useState } from 'react';
import { ToggleButton } from '@contentful/f36-components';

import { ThumbsUpIcon } from '@contentful/f36-icons-alpha';

export default function ToggleButtonBasicExample() {
  const [isActive, setIsActive] = useState(false);
  return (
    <ToggleButton
      isActive={isActive}
      onToggle={() => {
        setIsActive(!isActive);
      }}
      icon={<ThumbsUpIcon />}
    >
      Like
    </ToggleButton>
  );
}
