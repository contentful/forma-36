import React from 'react';
import figma from '@figma/code-connect';
import { TextLink } from './TextLink';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=9505:122034';

figma.connect(TextLink, FIGMA_URL, {
  variant: { State: 'Default' },
  props: {
    variant: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
      Positive: 'positive',
      Negative: 'negative',
      White: 'white',
      Muted: 'muted',
      Highlight: 'premium',
    }),
    children: figma.string('Label'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: figma.boolean('Show end icon', {
        true: figma.instance('End icon'),
        false: undefined,
      }),
    }),
    alignIcon: figma.boolean('Show end icon', {
      true: 'end',
      false: undefined,
    }),
  },
  example: ({ variant, children, icon, alignIcon }) => (
    <TextLink variant={variant} icon={icon} alignIcon={alignIcon}>
      {children}
    </TextLink>
  ),
});

figma.connect(TextLink, FIGMA_URL, {
  variant: { State: 'Disabled' },
  props: {
    variant: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
      Positive: 'positive',
      Negative: 'negative',
      White: 'white',
      Muted: 'muted',
      Highlight: 'premium',
    }),
    children: figma.string('Label'),
    icon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: figma.boolean('Show end icon', {
        true: figma.instance('End icon'),
        false: undefined,
      }),
    }),
    alignIcon: figma.boolean('Show end icon', {
      true: 'end',
      false: undefined,
    }),
  },
  example: ({ variant, children, icon, alignIcon }) => (
    <TextLink variant={variant} isDisabled icon={icon} alignIcon={alignIcon}>
      {children}
    </TextLink>
  ),
});
