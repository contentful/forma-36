import React, { useState } from 'react';
import { Stack, Popover, Switch } from '@contentful/f36-components';
import FocusLock from 'react-focus-lock';

export default function PopoverFocusLockExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Popover.TriggerButton
        title="Toggle"
        onClick={() => setIsOpen(!isOpen)}
      />
      <Popover.Content>
        {/* Just wrap your content with FocusLock component */}
        <FocusLock>
          <Stack
            padding="spacingM"
            margin="none"
            spacing="spacingS"
            flexDirection="column"
          >
            <Switch>Option 1</Switch>
            <Switch>Option 2</Switch>
            <Switch>Option 3</Switch>
          </Stack>
        </FocusLock>
      </Popover.Content>
    </Popover>
  );
}
