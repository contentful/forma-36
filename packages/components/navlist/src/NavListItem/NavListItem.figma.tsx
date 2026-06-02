import React from 'react';
import figma from '@figma/code-connect';
import { NavListItem } from './NavListItem';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=10671:5210';

figma.connect(NavListItem, FIGMA_URL, {
  variant: { State: 'Default' },
  props: {
    children: figma.string('Label'),
  },
  example: ({ children }) => <NavListItem href="#">{children}</NavListItem>,
});

figma.connect(NavListItem, FIGMA_URL, {
  variant: { State: 'Active' },
  props: {
    children: figma.string('Label'),
  },
  example: ({ children }) => (
    <NavListItem href="#" isActive>
      {children}
    </NavListItem>
  ),
});

figma.connect(NavListItem, FIGMA_URL, {
  variant: { State: 'Disabled' },
  props: {
    children: figma.string('Label'),
  },
  example: ({ children }) => (
    <NavListItem href="#" isDisabled>
      {children}
    </NavListItem>
  ),
});
