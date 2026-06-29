import React from 'react';
import figma from '@figma/code-connect';
import { Menu } from '../CompoundMenu';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=10619:13878';

figma.connect(Menu.Item, FIGMA_URL, {
  variant: { State: 'Default', Destructive: 'False' },
  props: {
    children: figma.string('Title'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ children, icon }) => (
    <Menu.Item icon={icon}>{children}</Menu.Item>
  ),
});

figma.connect(Menu.Item, FIGMA_URL, {
  variant: { State: 'Disabled', Destructive: 'False' },
  props: {
    children: figma.string('Title'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ children, icon }) => (
    <Menu.Item icon={icon} isDisabled>
      {children}
    </Menu.Item>
  ),
});

figma.connect(Menu.Item, FIGMA_URL, {
  variant: { State: 'Default', Destructive: 'True' },
  props: {
    children: figma.string('Title'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ children, icon }) => (
    <Menu.Item icon={icon} className="destructive">
      {children}
    </Menu.Item>
  ),
});

figma.connect(Menu.Item, FIGMA_URL, {
  variant: { State: 'Disabled', Destructive: 'True' },
  props: {
    children: figma.string('Title'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
  },
  example: ({ children, icon }) => (
    <Menu.Item icon={icon} isDisabled className="destructive">
      {children}
    </Menu.Item>
  ),
});
