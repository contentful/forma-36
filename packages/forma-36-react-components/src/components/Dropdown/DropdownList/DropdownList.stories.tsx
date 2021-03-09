import React from 'react';

import { DropdownList } from './DropdownList';
import { DropdownListItem } from '../DropdownListItem/DropdownListItem';

export default {
  title: 'Components/Dropdown/DropdownList',
  component: DropdownList,
  parameters: {
    propTypes: [DropdownList['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

export const Basic = () => (
  <DropdownList>
    <DropdownListItem isTitle>Title Text</DropdownListItem>
    <DropdownListItem isDisabled>Block entry disabled</DropdownListItem>
  </DropdownList>
);
