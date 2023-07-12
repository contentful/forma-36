import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { EntityList } from '../src';

export default {
  title: 'Components/EntityList/EntityList',
  component: EntityList,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta<typeof EntityList>;

type Story = StoryObj<typeof EntityList>;

export const Basic: Story = {
  render: () => (
    <EntityList>
      <EntityList.Item
        title="Entry 1"
        description="Description"
        contentType="My content type"
        status="published"
      />
      <EntityList.Item
        title="Entry 2"
        description="Description"
        contentType="My content type"
        status="draft"
        entityType="Page"
      />
      <EntityList.Item
        title="Entry 3"
        description="Description"
        contentType="My content type"
        status="archived"
        entityType="Release"
      />
    </EntityList>
  ),
};

export const withDragHandle: Story = {
  render: () => (
    <EntityList>
      <EntityList.Item
        title="Entry 1"
        description="Description"
        contentType="My content type"
        status="published"
        withDragHandle
      />
      <EntityList.Item
        title="Entry 2"
        description="Description"
        contentType="My content type"
        status="draft"
        withDragHandle
      />
      <EntityList.Item
        title="Entry 3"
        description="Description"
        contentType="My content type"
        status="archived"
        withDragHandle
      />
    </EntityList>
  ),
};
