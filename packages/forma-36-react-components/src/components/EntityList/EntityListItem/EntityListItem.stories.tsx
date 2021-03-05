import React from 'react';

import { EntityListItem, EntityListItemProps } from './EntityListItem';
import { DropdownList, DropdownListItem } from '../../Dropdown';
import { CardDragHandle } from './../../Card';
import notes from './README.mdx';

export default {
  title: 'Components/EntityList/EntityListItem',
  component: EntityListItem,
  parameters: {
    propTypes: [EntityListItem['__docgenInfo']],
    notes,
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = (args: EntityListItemProps) => (
  <EntityListItem
    {...args}
    dropdownListElements={
      <DropdownList>
        <DropdownListItem isTitle>Actions</DropdownListItem>
        <DropdownListItem>Edit</DropdownListItem>
        <DropdownListItem>Download</DropdownListItem>
        <DropdownListItem>Remove</DropdownListItem>
      </DropdownList>
    }
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

export const withCustomCardDragHandle = (args: EntityListItemProps) => (
  <EntityListItem
    {...args}
    dropdownListElements={
      <DropdownList>
        <DropdownListItem isTitle>Actions</DropdownListItem>
        <DropdownListItem>Edit</DropdownListItem>
        <DropdownListItem>Download</DropdownListItem>
        <DropdownListItem>Remove</DropdownListItem>
      </DropdownList>
    }
    cardDragHandleComponent={<CardDragHandle>Reorder card</CardDragHandle>}
  />
);

withCustomCardDragHandle.args = {
  ...Basic.args,
};
