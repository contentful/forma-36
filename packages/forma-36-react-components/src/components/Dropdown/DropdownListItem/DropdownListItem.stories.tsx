import React from 'react';
import DropdownListItem, { DropdownListItemProps } from './DropdownListItem';

export default {
  title: 'Components/Dropdown/DropdownListItem',
  component: DropdownListItem,
  parameters: {
    propTypes: [DropdownListItem['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

interface Args extends DropdownListItemProps {
  DropdownListItemText: string;
}
export const Basic = ({ DropdownListItemText }: Args) => (
  <DropdownListItem>{DropdownListItemText}</DropdownListItem>
);

export const WithOnClick = ({ DropdownListItemText }: Args) => (
  <DropdownListItem onClick={() => {}}>{DropdownListItemText}</DropdownListItem>
);

Basic.args = {
  DropdownListItemText: 'Menu Entry',
};

WithOnClick.args = {
  ...Basic.args,
};
