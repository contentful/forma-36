import React from 'react';
import figma from '@figma/code-connect';
import { Tooltip } from './Tooltip';
import { Button } from '@contentful/f36-button';

figma.connect(
  Tooltip,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=902:9261',
  {
    props: {
      content: figma.string('Text'),
      placement: figma.enum('Placement', {
        Top: 'top',
        Bottom: 'bottom',
        Left: 'left',
        Right: 'right',
      }),
    },
    example: ({ content, placement }) => (
      <Tooltip content={content} placement={placement}>
        <Button>Trigger</Button>
      </Tooltip>
    ),
  },
);
