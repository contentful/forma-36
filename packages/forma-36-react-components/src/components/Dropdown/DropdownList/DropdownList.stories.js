import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import { selectV2 } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import DropdownListItem from '../DropdownListItem';
import DropdownList from './DropdownList';

storiesOf('Components|Dropdown/DropdownList', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <DropdownList
        border={selectV2('Border', [undefined, 'top', 'bottom'], undefined)}
      >
        <DropdownListItem isTitle>Title Text</DropdownListItem>
        <DropdownListItem isDisabled>Block entry disabled</DropdownListItem>
      </DropdownList>
    )),
  );
