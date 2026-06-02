import React from 'react';
import figma from '@figma/code-connect';
import { Accordion } from './CompoundAccordion';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=4744:57213';

figma.connect(Accordion, FIGMA_URL, {
  variant: { Open: 'False', State: 'Default' },
  props: {
    align: figma.enum('Align chevron', {
      End: 'end',
      Start: 'start',
    }),
    title: figma.string('Title'),
    bodyText: figma.boolean('Show body copy', {
      true: figma.string('Text'),
      false: undefined,
    }),
    contentSlot: figma.boolean('Content slot', {
      true: figma.instance('Replace with'),
      false: undefined,
    }),
  },
  example: ({ align, title, bodyText, contentSlot }) => (
    <Accordion align={align}>
      <Accordion.Item title={title}>
        {bodyText}
        {contentSlot}
      </Accordion.Item>
    </Accordion>
  ),
});

figma.connect(Accordion, FIGMA_URL, {
  variant: { Open: 'True', State: 'Default' },
  props: {
    align: figma.enum('Align chevron', {
      End: 'end',
      Start: 'start',
    }),
    title: figma.string('Title'),
    bodyText: figma.boolean('Show body copy', {
      true: figma.string('Text'),
      false: undefined,
    }),
    contentSlot: figma.boolean('Content slot', {
      true: figma.instance('Replace with'),
      false: undefined,
    }),
  },
  example: ({ align, title, bodyText, contentSlot }) => (
    <Accordion align={align}>
      <Accordion.Item title={title} isExpanded>
        {bodyText}
        {contentSlot}
      </Accordion.Item>
    </Accordion>
  ),
});
