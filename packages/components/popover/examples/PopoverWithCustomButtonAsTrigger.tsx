import React, { useState } from 'react';
import { Box, Button, Paragraph, Popover } from '@contentful/f36-components';

export default function PopoverWithCustomButtonAsTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Popover.Trigger>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          Toggle popover
        </button>
      </Popover.Trigger>
      <Popover.Content>
        <Box padding="spacingM">
          <Paragraph>This is the content.</Paragraph>
          <Button>Some action</Button>
        </Box>
      </Popover.Content>
    </Popover>
  );
}
