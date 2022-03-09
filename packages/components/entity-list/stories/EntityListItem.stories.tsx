import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { EntityList } from '../src';
import type { EntityListItemProps } from '../src';
import { DragHandle } from '@contentful/f36-drag-handle';
import { MenuItem, MenuSectionTitle } from '@contentful/f36-menu';

export default {
  title: 'Components/EntityList/EntityListItem',
  component: EntityList.Item,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Basic: Story<EntityListItemProps> = (args) => (
  <EntityList.Item
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
  thumbnailUrl: 'https://placeholder.pics/svg/400x400',
  thumbnailAltText: 'My thumbnail text',
  withThumbnail: true,
  entityType: 'entry',
  status: 'published',
};

export const withDragHandle: Story<EntityListItemProps> = (args) => (
  <EntityList.Item
    {...args}
    actions={[
      <MenuSectionTitle key="title">Actions</MenuSectionTitle>,
      <MenuItem key="edit">Edit</MenuItem>,
      <MenuItem key="download">Download</MenuItem>,
      <MenuItem key="remove">Remove</MenuItem>,
    ]}
    withDragHandle
  />
);

withDragHandle.args = {
  ...Basic.args,
};

export const withCustomDragHandle: Story<EntityListItemProps> = (args) => (
  <EntityList.Item
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
