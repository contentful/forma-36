import React from 'react';
import figma from '@figma/code-connect';
import { ToggleButton } from './ToggleButton';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=9318:148375';

figma.connect(ToggleButton, FIGMA_URL, {
  variant: { State: 'Default', 'Show label': 'True' },
  props: {
    size: figma.enum('Size', {
      Tiny: 'tiny',
      Small: 'small',
      Medium: 'medium',
    }),
    variant: figma.enum('Variant', {
      Default: undefined,
      Transparent: 'transparent',
    }),
    children: figma.string('Label'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ size, variant, children, icon }) => (
    <ToggleButton size={size} variant={variant} icon={icon} onToggle={() => {}}>
      {children}
    </ToggleButton>
  ),
});

figma.connect(ToggleButton, FIGMA_URL, {
  variant: { State: 'Active', 'Show label': 'True' },
  props: {
    size: figma.enum('Size', {
      Tiny: 'tiny',
      Small: 'small',
      Medium: 'medium',
    }),
    variant: figma.enum('Variant', {
      Default: undefined,
      Transparent: 'transparent',
    }),
    children: figma.string('Label'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ size, variant, children, icon }) => (
    <ToggleButton
      size={size}
      variant={variant}
      isActive
      icon={icon}
      onToggle={() => {}}
    >
      {children}
    </ToggleButton>
  ),
});

figma.connect(ToggleButton, FIGMA_URL, {
  variant: { State: 'Disabled', 'Show label': 'True' },
  props: {
    size: figma.enum('Size', {
      Tiny: 'tiny',
      Small: 'small',
      Medium: 'medium',
    }),
    variant: figma.enum('Variant', {
      Default: undefined,
      Transparent: 'transparent',
    }),
    children: figma.string('Label'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ size, variant, children, icon }) => (
    <ToggleButton
      size={size}
      variant={variant}
      isDisabled
      icon={icon}
      onToggle={() => {}}
    >
      {children}
    </ToggleButton>
  ),
});

figma.connect(ToggleButton, FIGMA_URL, {
  variant: { State: 'Default', 'Show label': 'False' },
  props: {
    size: figma.enum('Size', {
      Tiny: 'tiny',
      Small: 'small',
      Medium: 'medium',
    }),
    variant: figma.enum('Variant', {
      Default: undefined,
      Transparent: 'transparent',
    }),
    icon: figma.instance('Start icon') as unknown as React.ReactElement,
  },
  example: ({ size, variant, icon }) => (
    <ToggleButton
      aria-label="Toggle button"
      size={size}
      variant={variant}
      icon={icon}
      onToggle={() => {}}
    />
  ),
});

figma.connect(ToggleButton, FIGMA_URL, {
  variant: { State: 'Active', 'Show label': 'False' },
  props: {
    size: figma.enum('Size', {
      Tiny: 'tiny',
      Small: 'small',
      Medium: 'medium',
    }),
    variant: figma.enum('Variant', {
      Default: undefined,
      Transparent: 'transparent',
    }),
    icon: figma.instance('Start icon') as unknown as React.ReactElement,
  },
  example: ({ size, variant, icon }) => (
    <ToggleButton
      aria-label="Toggle button"
      size={size}
      variant={variant}
      isActive
      icon={icon}
      onToggle={() => {}}
    />
  ),
});

figma.connect(ToggleButton, FIGMA_URL, {
  variant: { State: 'Disabled', 'Show label': 'False' },
  props: {
    size: figma.enum('Size', {
      Tiny: 'tiny',
      Small: 'small',
      Medium: 'medium',
    }),
    variant: figma.enum('Variant', {
      Default: undefined,
      Transparent: 'transparent',
    }),
    icon: figma.instance('Start icon') as unknown as React.ReactElement,
  },
  example: ({ size, variant, icon }) => (
    <ToggleButton
      aria-label="Toggle button"
      size={size}
      variant={variant}
      isDisabled
      icon={icon}
      onToggle={() => {}}
    />
  ),
});
