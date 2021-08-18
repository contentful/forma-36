import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Popover, PopoverTrigger, PopoverContent } from '../src/.';
import type { PopoverProps } from '../src/.';
import { Button } from '@contentful/f36-button';
import { Text } from '@contentful/f36-typography';
import { Box } from '@contentful/f36-core';

export default {
  component: Popover,
  parameters: {
    propTypes: Popover['__docgenInfo'],
  },
  title: 'Components/Popover',
  argTypes: {
    isOpen: { control: { disable: true } },
  },
} as Meta;

export const Basic: Story<PopoverProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <PopoverTrigger>
        <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Box padding="spacingM">
          <Text as="p" marginBottom="spacingM">
            This is the content.
          </Text>
          <Button>Some action</Button>
        </Box>
      </PopoverContent>
    </Popover>
  );
};
