import React from 'react';
import figma from '@figma/code-connect';
import { Select } from './CompoundSelect';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=11367:96616';

/**
 * Default state (not disabled)
 */
figma.connect(Select, FIGMA_URL, {
  variant: { State: 'Default' },
  props: {
    size: figma.enum('Size', {
      Medium: 'medium',
      Small: 'small',
    }),
    isInvalid: figma.enum('Invalid', {
      True: true,
      False: false,
    }),
    defaultValue: figma.string('Value'),
  },
  example: ({ size, isInvalid, defaultValue }) => (
    <Select size={size} isInvalid={isInvalid} defaultValue={defaultValue}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
  ),
});

/**
 * Disabled state
 */
figma.connect(Select, FIGMA_URL, {
  variant: { State: 'Disabled' },
  props: {
    size: figma.enum('Size', {
      Medium: 'medium',
      Small: 'small',
    }),
    isInvalid: figma.enum('Invalid', {
      True: true,
      False: false,
    }),
    defaultValue: figma.string('Value'),
  },
  example: ({ size, isInvalid, defaultValue }) => (
    <Select
      isDisabled
      size={size}
      isInvalid={isInvalid}
      defaultValue={defaultValue}
    >
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
  ),
});
