import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { EntityList } from '../src';
import type { EntityListProps } from '../src';

export default {
  title: 'Components/EntityList/EntityList',
  component: EntityList,
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Basic: Story<EntityListProps> = () => (
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
    />
    <EntityList.Item
      title="Entry 3"
      description="Description"
      contentType="My content type"
      status="archived"
    />
  </EntityList>
);

export const withDragHandle = () => (
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
);
