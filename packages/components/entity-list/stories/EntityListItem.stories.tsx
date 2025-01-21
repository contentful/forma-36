import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { DragHandle } from '@contentful/f36-drag-handle';
import { MenuItem, MenuSectionTitle } from '@contentful/f36-menu';

import { EntityList, type EntityListItemProps } from '../src';

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
  thumbnailUrl:
    'https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=400&h=400',
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
