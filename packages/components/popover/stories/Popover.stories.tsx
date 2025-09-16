import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@contentful/f36-button';
import { Paragraph } from '@contentful/f36-typography';
import { Box } from '@contentful/f36-core';
import { Popover, type PopoverProps } from '../src/.';

const meta = {
  component: Popover,
  title: 'Components/Popover',
} satisfies Meta;

export default meta;

export const Basic = () => {
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
};
