import React, { useState } from 'react';
import { Button, Paragraph, Box, Popover } from '@contentful/f36-components';

export default function PopoverBasicExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Popover.TriggerButton
        title="Toggle"
        onClick={() => setIsOpen(!isOpen)}
      />
      <Popover.Content>
        <Box padding="spacingM">
          <Paragraph>This is the content.</Paragraph>
          <Button>Some action</Button>
        </Box>
      </Popover.Content>
    </Popover>
  );
}
