import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import DropdownListItem from '../DropdownListItem';
import DropdownList from './DropdownList';

storiesOf('Components|Dropdown/DropdownList', module)
  .addParameters({
    propTypes: [DropdownList['__docgenInfo'], DropdownListItem['__docgenInfo']],
  })
  .add('default', () => (
    <DropdownList
      border={select('Border', [undefined, 'top', 'bottom'], undefined)}
    >
      <DropdownListItem isTitle>Title Text</DropdownListItem>
      <DropdownListItem isDisabled>Block entry disabled</DropdownListItem>
    </DropdownList>
  ));
