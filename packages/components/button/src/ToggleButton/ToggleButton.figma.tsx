import React from 'react';
import figma from '@figma/code-connect';
import { ToggleButton } from './ToggleButton';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=9318:148375';

figma.connect(ToggleButton, FIGMA_URL, {
  variant: { State: 'Default' },
  props: {
    size: figma.enum('Size', {
      'Small (default)': 'small',
      Medium: 'medium',
    }),
    children: figma.string('Label'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ size, children, icon }) => (
    <ToggleButton size={size} icon={icon} onToggle={() => {}}>
      {children}
    </ToggleButton>
  ),
});

figma.connect(ToggleButton, FIGMA_URL, {
  variant: { State: 'Active' },
  props: {
    size: figma.enum('Size', {
      'Small (default)': 'small',
      Medium: 'medium',
    }),
    children: figma.string('Label'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ size, children, icon }) => (
    <ToggleButton size={size} isActive icon={icon} onToggle={() => {}}>
      {children}
    </ToggleButton>
  ),
});

figma.connect(ToggleButton, FIGMA_URL, {
  variant: { State: 'Disabled' },
  props: {
    size: figma.enum('Size', {
      'Small (default)': 'small',
      Medium: 'medium',
    }),
    children: figma.string('Label'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ size, children, icon }) => (
    <ToggleButton size={size} isDisabled icon={icon} onToggle={() => {}}>
      {children}
    </ToggleButton>
  ),
});
