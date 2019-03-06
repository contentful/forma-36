import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import DropdownListItem from './DropdownListItem';

storiesOf('Components|Dropdown/DropdownListItem', module).add('default', () => (
  <DropdownListItem
    isDisabled={boolean('isDisabled', false)}
    isActive={boolean('isActive', false)}
    isTitle={boolean('isTitle', false)}
  >
    {text('Text', 'Menu Entry')}
  </DropdownListItem>
));
