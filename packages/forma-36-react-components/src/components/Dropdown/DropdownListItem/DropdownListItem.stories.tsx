import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DropdownListItem from './DropdownListItem';

storiesOf('Components/Dropdown/DropdownListItem', module)
  .addParameters({
    propTypes: DropdownListItem['__docgenInfo'],
    component: DropdownListItem,
  })
  .add('default', () => (
    <DropdownListItem
      isDisabled={boolean('isDisabled', false)}
      isActive={boolean('isActive', false)}
      isTitle={boolean('isTitle', false)}
      href={text('href', '')}
    >
      {text('children', 'Menu Entry')}
    </DropdownListItem>
  ))
  .add('with onClick', () => (
    <DropdownListItem
      isDisabled={boolean('isDisabled', false)}
      isActive={boolean('isActive', false)}
      isTitle={boolean('isTitle', false)}
      href={text('href', '')}
      onClick={action('onClick')}
    >
      {text('children', 'Menu Entry')}
    </DropdownListItem>
  ));
