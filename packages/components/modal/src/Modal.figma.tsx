import React from 'react';
import figma from '@figma/code-connect';
import { Modal } from './CompoundModal';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=9565:124579';

figma.connect(Modal, FIGMA_URL, {
  props: {
    size: figma.enum('Size', {
      'Small (400px)': 'small',
      'Medium (520px)': 'medium',
      'Large (700px)': 'large',
      'Full width': 'fullWidth',
      'Full screen': 'fullscreen',
    }),
    title: figma.string('Title'),
    bodyText: figma.string('Text'),
    contentSlot: figma.boolean('Content slot', {
      true: figma.instance('Replace with'),
      false: undefined,
    }),
  },
  example: ({ size, title, bodyText, contentSlot }) => (
    <Modal isShown onClose={() => {}} size={size}>
      <Modal.Header title={title} onClose={() => {}} />
      <Modal.Content>
        <p>{bodyText}</p>
        {contentSlot}
      </Modal.Content>
    </Modal>
  ),
});
