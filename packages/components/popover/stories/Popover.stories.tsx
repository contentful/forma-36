import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '@contentful/f36-button';
import { Paragraph } from '@contentful/f36-typography';
import { Box, Stack } from '@contentful/f36-core';
import { Switch } from '@contentful/f36-forms';
import FocusLock from 'react-focus-lock';

import { Popover, type PopoverProps } from '../src/.';

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

export const WithFocusLock: Story<PopoverProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <Popover.Trigger>
        <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
      </Popover.Trigger>
      <Popover.Content>
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
};
