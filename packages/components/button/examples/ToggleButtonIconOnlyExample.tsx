import React, { useState } from 'react';
import { ToggleButton } from '@contentful/f36-components';
import { ThumbsUpIcon } from '@contentful/f36-icons';

export default function ToggleButtonIconOnlyExample() {
  const [isActive, setIsActive] = useState(false);

  return (
    <ToggleButton
      aria-label="Like"
      icon={<ThumbsUpIcon isActive={isActive} />}
      isActive={isActive}
      onToggle={() => setIsActive(!isActive)}
      size="tiny"
    />
  );
}
