import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { DragHandle } from '@contentful/f36-drag-handle';
import { MenuItem, MenuSectionTitle } from '@contentful/f36-menu';

import { EntityList } from '../src';

export default {
  title: 'Components/EntityList/EntityListItem',
  component: EntityList.Item,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Basic = (args) => (
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
  withThumbnail: true,
  entityType: 'Experience',
  status: 'published',
};

export const WithDragHandle = (args) => (
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

WithDragHandle.args = {
  ...Basic.args,
};

export const WithCustomDragHandle = (args) => (
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

WithCustomDragHandle.args = {
  ...Basic.args,
};
