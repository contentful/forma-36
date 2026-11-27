import React, { useState } from 'react';
import { Box, Button, Paragraph, Popover } from '@contentful/f36-components';

export default function PopoverWithTextButtonAsTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Popover.TriggerButton
        title="Toggle popover"
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
