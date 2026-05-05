import React from 'react';
import figma from '@figma/code-connect';
import { Card } from './Card';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=9658:125200';

figma.connect(Card, FIGMA_URL, {
  variant: { State: 'Default' },
  props: {
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
    withDragHandle: figma.boolean('Dragable'),
    icon: figma.boolean('Show icon', {
      true: figma.instance('Icon'),
      false: undefined,
    }),
  },
  example: ({
    padding,
    title,
    bodyText,
    contentSlot,
    withDragHandle,
    icon,
  }) => (
    <Card
      padding={padding}
      title={title}
      icon={icon}
      withDragHandle={withDragHandle}
    >
      {bodyText}
      {contentSlot}
    </Card>
  ),
});

figma.connect(Card, FIGMA_URL, {
  variant: { State: 'Selected' },
  props: {
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
    withDragHandle: figma.boolean('Dragable'),
    icon: figma.boolean('Show icon', {
      true: figma.instance('Icon'),
      false: undefined,
    }),
  },
  example: ({
    padding,
    title,
    bodyText,
    contentSlot,
    withDragHandle,
    icon,
  }) => (
    <Card
      isSelected
      padding={padding}
      title={title}
      icon={icon}
      withDragHandle={withDragHandle}
    >
      {bodyText}
      {contentSlot}
    </Card>
  ),
});
