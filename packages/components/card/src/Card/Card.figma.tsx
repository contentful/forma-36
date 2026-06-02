import React from 'react';
import figma from '@figma/code-connect';
import { Card } from './Card';
import { Badge } from '@contentful/f36-badge';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=9658:125200';

const sharedProps = {
  padding: figma.enum('Margins', {
    Medium: 'default',
    Large: 'large',
  }),
  title: figma.boolean('Show title', {
    true: figma.string('Title'),
    false: undefined,
  }),
  bodyText: figma.boolean('Show body copy', {
    true: figma.string('Text'),
    false: undefined,
  }),
  contentSlot: figma.boolean('Content slot', {
    true: figma.instance('Replace with'),
    false: undefined,
  }),
  icon: figma.boolean('Show icon', {
    true: figma.instance('Icon'),
    false: undefined,
  }),
};

const badgeProps = {
  badgeVariant: figma.nestedProps('Badge', {
    variant: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
      Positive: 'positive',
      Negative: 'negative',
      Warning: 'warning',
      Featured: 'featured',
      'Primary filled': 'primary-filled',
    }),
    size: figma.enum('Size', {
      Medium: undefined,
      Small: 'small',
    }),
    label: figma.string('Label'),
    startIcon: figma.boolean('Show start icon', {
      true: figma.instance('Start icon'),
      false: undefined,
    }),
    endIcon: figma.boolean('Show end icon', {
      true: figma.instance('End icon'),
      false: undefined,
    }),
  }),
};

// State=Default, no badge
figma.connect(Card, FIGMA_URL, {
  variant: { State: 'Default', Badge: 'false' },
  props: sharedProps,
  example: ({ padding, title, bodyText, contentSlot, icon }) => (
    <Card padding={padding} title={title} icon={icon}>
      {bodyText}
      {contentSlot}
    </Card>
  ),
});

// State=Default, with badge
figma.connect(Card, FIGMA_URL, {
  variant: { State: 'Default', Badge: 'true' },
  props: { ...sharedProps, ...badgeProps },
  example: ({ padding, title, bodyText, contentSlot, icon, badgeVariant }) => (
    <Card
      padding={padding}
      title={title}
      icon={icon}
      badge={
        <Badge
          variant={badgeVariant.variant}
          size={badgeVariant.size}
          startIcon={badgeVariant.startIcon}
          endIcon={badgeVariant.endIcon}
        >
          {badgeVariant.label}
        </Badge>
      }
    >
      {bodyText}
      {contentSlot}
    </Card>
  ),
});

// State=Selected, no badge
figma.connect(Card, FIGMA_URL, {
  variant: { State: 'Selected', Badge: 'false' },
  props: sharedProps,
  example: ({ padding, title, bodyText, contentSlot, icon }) => (
    <Card isSelected padding={padding} title={title} icon={icon}>
      {bodyText}
      {contentSlot}
    </Card>
  ),
});

// State=Selected, with badge
figma.connect(Card, FIGMA_URL, {
  variant: { State: 'Selected', Badge: 'true' },
  props: { ...sharedProps, ...badgeProps },
  example: ({ padding, title, bodyText, contentSlot, icon, badgeVariant }) => (
    <Card
      isSelected
      padding={padding}
      title={title}
      icon={icon}
      badge={
        <Badge
          variant={badgeVariant.variant}
          size={badgeVariant.size}
          startIcon={badgeVariant.startIcon}
          endIcon={badgeVariant.endIcon}
        >
          {badgeVariant.label}
        </Badge>
      }
    >
      {bodyText}
      {contentSlot}
    </Card>
  ),
});
