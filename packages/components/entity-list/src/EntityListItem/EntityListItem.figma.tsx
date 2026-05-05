import React from 'react';
import figma from '@figma/code-connect';
import { EntityListItem } from './EntityListItem';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=1128:62288';

figma.connect(EntityListItem, FIGMA_URL, {
  variant: { State: 'Default' },
  props: {
    withDragHandle: figma.enum('Dragable', {
      true: true,
      false: undefined,
    }),
    thumbnailUrl: figma.enum('Thumbnail', {
      true: 'https://via.placeholder.com/46',
      false: undefined,
    }),
    status: figma.enum('Tag', {
      true: 'published',
      false: undefined,
    }),
  },
  example: ({ withDragHandle, thumbnailUrl, status }) => (
    <EntityListItem
      title="Entry title"
      description="Entry description"
      status={status}
      thumbnailUrl={thumbnailUrl}
      thumbnailAltText="Entry thumbnail"
      withDragHandle={withDragHandle}
      actions={[]}
    />
  ),
});
