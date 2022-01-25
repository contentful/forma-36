import React, { useState } from 'react';
import { Button, Paragraph, Box, Popover } from '@contentful/f36-components';

export default function PopoverBasicExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Popover.Trigger>
        <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
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
