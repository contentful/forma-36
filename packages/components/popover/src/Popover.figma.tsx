import React from 'react';
import figma from '@figma/code-connect';
import { Popover } from './CompoundPopover';
import { Button } from '@contentful/f36-button';

figma.connect(
  Popover,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=11517:111133',
  {
    example: () => (
      <Popover>
        <Popover.Trigger>
          <Button>Toggle popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <p>Popover content</p>
        </Popover.Content>
      </Popover>
    ),
  },
);
