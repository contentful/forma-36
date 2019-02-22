import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import DropdownListItem from './DropdownListItem';

storiesOf('Components|Dropdown/DropdownListItem', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <DropdownListItem
        isDisabled={boolean('isDisabled', false)}
        isActive={boolean('isActive', false)}
        isTitle={boolean('isTitle', false)}
      >
        {text('Text', 'Menu Entry')}
      </DropdownListItem>
    )),
  );
