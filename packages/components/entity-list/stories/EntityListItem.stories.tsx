import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { DragHandle } from '@contentful/f36-drag-handle';
import { MenuItem, MenuSectionTitle } from '@contentful/f36-menu';

import { EntityList, type EntityListItemProps } from '../src';

export default {
  title: 'Containers/EntityList/EntityListItem',
  component: EntityList.Item,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const EntityListItem: Story<EntityListItemProps> = (args) => (
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

EntityListItem.args = {
  title: 'Entity title',
  description: 'Entity description',
  contentType: 'My content type',
  thumbnailUrl:
    'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=400&h=400',
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
  ...EntityListItem.args,
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
  ...EntityListItem.args,
};
