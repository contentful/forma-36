import React from 'react';
import figma from '@figma/code-connect';
import { Note } from './Note';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=11733:9310';

figma.connect(Note, FIGMA_URL, {
  props: {
    variant: figma.enum('Type', {
      Neutral: 'neutral',
      Primary: 'primary',
      Positive: 'positive',
      Warning: 'warning',
      Negative: 'negative',
      Highlight: 'premium',
    }),
    title: figma.boolean('Show title', {
      true: figma.string('Title'),
      false: undefined,
    }),
    children: figma.string('Body copy'),
    withCloseButton: figma.boolean('Close button'),
    icon: figma.boolean('Content slot', {
      true: figma.instance('Replace with'),
      false: undefined,
    }),
  },
  example: ({ variant, title, children, withCloseButton, icon }) => (
    <Note
      variant={variant}
      title={title}
      withCloseButton={withCloseButton}
      onClose={() => {}}
      icon={icon}
    >
      {children}
    </Note>
  ),
});
