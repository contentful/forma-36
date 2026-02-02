/* eslint-disable no-console */
import React from 'react';
import type { Meta } from '@storybook/react-vite';

import { EntityList } from '../src';
import { MenuItem, MenuSectionTitle } from '@contentful/f36-components';

export default {
  title: 'Components/EntityList/EntityList',
  component: EntityList,
  decorators: [
    (StoryComponent) => (
      <div style={{ maxWidth: '600px' }}>
        <StoryComponent />
      </div>
    ),
  ],
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

const actions = [
  <MenuSectionTitle key="title">Actions</MenuSectionTitle>,
  <MenuItem
    key="edit"
    onClick={() => {
      console.log('[ <MenuItem> ] Edit');
    }}
  >
    Edit
  </MenuItem>,
  <MenuItem
    key="cancel"
    onClick={() => {
      console.log('[ <MenuItem> ] Delete');
    }}
  >
    Delete
  </MenuItem>,
];

export const Basic = () => (
  <EntityList>
    <EntityList.Item
      title="{ ONE } onClick & onMenuClick, href=undefined - <button>"
      actions={actions}
      onClick={() => {
        console.log('{ ONE } onClick()');
      }}
      description="Description"
      contentType="My content type"
      status="published"
    />
    <EntityList.Item
      title="{ TWO } href, onClick=undefined - <a>"
      href={'https://contentful.com'}
      description="Description"
      contentType="My content type"
      status="published"
    />
    <EntityList.Item
      title="{ THREE } onClick defined & href defined - <a> "
      href="https://github.com/contentful/forma-36"
      description="Description"
      contentType="My content type"
      status="draft"
      entityType="Page"
      onClick={() => {
        console.log('{ THREE } onClick()');
      }}
    />
    <EntityList.Item
      title="{ FOUR } onClick() defined, href=undefined - <button>"
      onClick={() => {
        console.log('{ FOUR } onClick()');
      }}
      description="Description"
      contentType="My content type"
      status="archived"
      entityType="Release"
    />
    <EntityList.Item
      title="{ FIVE } Presentational entity card - <article>"
      description="Description"
      contentType="Experiences content type"
      status="changed"
      entityType="Experience"
    />
  </EntityList>
);

export const WithDragHandle = () => (
  <EntityList>
    <EntityList.Item
      title="Entry 1"
      description="Description"
      contentType="My content type"
      status="published"
      withDragHandle
      isLoading
    />
    <EntityList.Item
      title="Entry 2"
      description="This is a long description to showcase what happens when we are running out of space."
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
    <EntityList.Item
      title="Entry 4"
      description="Description"
      contentType="My Studio Experiences content type"
      status="changed"
      entityType="Experience"
      withDragHandle
    />
  </EntityList>
);
