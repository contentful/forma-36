import React from 'react';
import CardActions from './CardActions';
import DropdownList from './../../Dropdown/DropdownList';
import DropdownListItem from './../../Dropdown/DropdownListItem';

export default {
  title: 'Components/Card/CardActions',
  component: CardActions,
  parameters: {
    propTypes: [CardActions['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = () => (
  <CardActions>
    <DropdownList>
      <DropdownListItem>Edit</DropdownListItem>
      <DropdownListItem>Download</DropdownListItem>
      <DropdownListItem>Remove</DropdownListItem>
    </DropdownList>
  </CardActions>
);

export const WithMultipleLists = () => (
  <CardActions>
    <DropdownList>
      <DropdownListItem>Edit</DropdownListItem>
      <DropdownListItem>Download</DropdownListItem>
      <DropdownListItem>Remove</DropdownListItem>
    </DropdownList>
    <DropdownList>
      <DropdownListItem>Edit</DropdownListItem>
      <DropdownListItem>Download</DropdownListItem>
      <DropdownListItem>Remove</DropdownListItem>
    </DropdownList>
  </CardActions>
);
