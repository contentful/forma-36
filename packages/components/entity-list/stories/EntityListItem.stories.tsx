import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
  args: {
    title: 'Entity title',
    description: 'Entity description',
    contentType: 'My content type',
    thumbnailUrl:
      'https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=400&h=400',
    thumbnailAltText: 'My thumbnail text',
    withThumbnail: true,
    entityType: 'entry',
    status: 'published',
  },
} as Meta<typeof EntityList.Item>;

type Story = StoryObj<typeof EntityList.Item>;

export const Basic: Story = {
  render: (args) => (
    <EntityList.Item
      {...args}
      actions={[
        <MenuSectionTitle key="title">Actions</MenuSectionTitle>,
        <MenuItem key="edit">Edit</MenuItem>,
        <MenuItem key="download">Download</MenuItem>,
        <MenuItem key="remove">Remove</MenuItem>,
      ]}
    />
  ),
};

export const withDragHandle: Story = {
  render: (args) => (
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
  ),
};

export const withCustomDragHandle: Story = {
  render: (args) => (
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
  ),
};
