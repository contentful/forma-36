import React, { useState } from 'react';
import { Button, Paragraph, Box, Popover } from '@contentful/f36-components';
import { ListIcon } from '@contentful/f36-icons';

export default function PopoverBasicExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Popover.TriggerButton
        variant="secondary"
        icon={<ListIcon />}
        aria-label="Toggle popover"
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
