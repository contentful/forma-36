import React from 'react';
import figma from '@figma/code-connect';
import { Pill } from './Pill';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=1114:529';

figma.connect(Pill, FIGMA_URL, {
  variant: { State: 'Default' },
  props: {
    onClose: figma.enum('Close', {
      true: () => {},
      false: undefined,
    }),
    isDraggable: figma.enum('Draggable', {
      true: true,
      false: undefined,
    }),
  },
  example: ({ onClose, isDraggable }) => (
    <Pill label="Pill label" onClose={onClose} isDraggable={isDraggable} />
  ),
});

figma.connect(Pill, FIGMA_URL, {
  variant: { State: 'Active' },
  props: {
    onClose: figma.enum('Close', {
      true: () => {},
      false: undefined,
    }),
    isDraggable: figma.enum('Draggable', {
      true: true,
      false: undefined,
    }),
  },
  example: ({ onClose, isDraggable }) => (
    <Pill
      label="Pill label"
      variant="active"
      onClose={onClose}
      isDraggable={isDraggable}
    />
  ),
});

figma.connect(Pill, FIGMA_URL, {
  variant: { State: 'Deleted' },
  props: {
    onClose: figma.enum('Close', {
      true: () => {},
      false: undefined,
    }),
    isDraggable: figma.enum('Draggable', {
      true: true,
      false: undefined,
    }),
  },
  example: ({ onClose, isDraggable }) => (
    <Pill
      label="Pill label"
      variant="deleted"
      onClose={onClose}
      isDraggable={isDraggable}
    />
  ),
});
