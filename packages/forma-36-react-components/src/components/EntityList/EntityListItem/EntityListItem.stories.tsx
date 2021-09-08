import React from 'react';
import { DragHandle } from '@contentful/f36-drag-handle';

import { EntityListItem, EntityListItemProps } from './EntityListItem';
import { MenuItem, MenuSectionTitle } from '@contentful/f36-menu';

export default {
  title: 'Components/EntityList/EntityListItem',
  component: EntityListItem,
  parameters: {
    propTypes: [EntityListItem['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: EntityListItemProps) => (
  <EntityListItem
    {...args}
    actions={[
      <MenuSectionTitle key="title">Actions</MenuSectionTitle>,
      <MenuItem key="edit">Edit</MenuItem>,
      <MenuItem key="download">Download</MenuItem>,
      <MenuItem key="remove">Remove</MenuItem>,
    ]}
  />
);

Basic.args = {
  title: 'Entity title',
  description: 'Entity description',
  contentType: 'My content type',
  thumbnailUrl: 'https://via.placeholder.com/400x400',
  thumbnailAltText: 'My thumbnail text',
  withThumbnail: true,
  entityType: 'entry',
  status: 'published',
};

export const withCustomDragHandle = (args: EntityListItemProps) => (
  <EntityListItem
    {...args}
    actions={[
      <MenuSectionTitle key="title">Actions</MenuSectionTitle>,
      <MenuItem key="edit">Edit</MenuItem>,
      <MenuItem key="download">Download</MenuItem>,
      <MenuItem key="remove">Remove</MenuItem>,
    ]}
    cardDragHandleComponent={<DragHandle label="Reorder card" />}
  />
);

withCustomDragHandle.args = {
  ...Basic.args,
};
