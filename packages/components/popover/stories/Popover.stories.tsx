import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Popover } from '../src/.';
import type { PopoverProps } from '../src/.';
import { Button } from '@contentful/f36-button';
import { Paragraph } from '@contentful/f36-typography';
import { Box } from '@contentful/f36-core';

export default {
  component: Popover,
  title: 'Components/Popover',
  argTypes: {
    isOpen: { control: { disable: true } },
  },
} as Meta;

export const Basic: Story<PopoverProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
