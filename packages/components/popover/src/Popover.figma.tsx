import React from 'react';
import figma from '@figma/code-connect';
import { Popover } from './CompoundPopover';

figma.connect(
  Popover,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=11517:111133',
  {
    example: () => (
      <Popover>
        <Popover.TriggerButton title="Toggle popover" />
        <Popover.Content>
          <p>Popover content</p>
        </Popover.Content>
      </Popover>
    ),
  },
);
