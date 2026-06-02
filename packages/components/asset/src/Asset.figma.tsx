import React from 'react';
import figma from '@figma/code-connect';
import { Asset } from './Asset';

/**
 * Note: The Figma "Size" variant has no corresponding code prop.
 * The Asset component fills 100% of its container width; sizing is
 * controlled by the parent layout, not by the component itself.
 */
figma.connect(
  Asset,
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=447:13241',
  {
    props: {},
    example: () => (
      <Asset
        type="image"
        src="https://example.com/image.jpg"
        title="Example asset"
      />
    ),
  },
);
