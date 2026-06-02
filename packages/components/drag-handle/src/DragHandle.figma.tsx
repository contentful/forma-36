import React from 'react';
import figma from '@figma/code-connect';
import { DragHandle } from './DragHandle';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=902:7955';

figma.connect(DragHandle, FIGMA_URL, {
  variant: { State: 'Default' },
  example: () => <DragHandle label="Drag to reorder" />,
});

figma.connect(DragHandle, FIGMA_URL, {
  variant: { State: 'Active' },
  example: () => <DragHandle label="Drag to reorder" isActive />,
});

figma.connect(DragHandle, FIGMA_URL, {
  variant: { State: 'Hover' },
  example: () => <DragHandle label="Drag to reorder" isHovered />,
});
