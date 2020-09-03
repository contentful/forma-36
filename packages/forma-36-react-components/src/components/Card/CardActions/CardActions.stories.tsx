import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import CardActions from './CardActions';
import DropdownList from './../../Dropdown/DropdownList';
import DropdownListItem from './../../Dropdown/DropdownListItem';

storiesOf('Components/Card/CardActions', module)
  .addParameters({
    propTypes: CardActions['__docgenInfo'],
    component: CardActions,
  })
  .add('default', () => (
    <CardActions
      className={text('className', '')}
      isDisabled={boolean('isDisabled', false)}
    >
      <DropdownList>
        <DropdownListItem onClick={action('Edit onClick')}>
          Edit
        </DropdownListItem>
        <DropdownListItem onClick={action('Download onClick')}>
          Download
        </DropdownListItem>
        <DropdownListItem onClick={action('Remove onClick')}>
          Remove
        </DropdownListItem>
      </DropdownList>
    </CardActions>
  ))
  .add('with multiple lists', () => (
    <CardActions
      className={text('className', '')}
      isDisabled={boolean('isDisabled', false)}
    >
      <DropdownList>
        <DropdownListItem onClick={action('Edit onClick')}>
          Edit
        </DropdownListItem>
        <DropdownListItem onClick={action('Download onClick')}>
          Download
        </DropdownListItem>
        <DropdownListItem onClick={action('Remove onClick')}>
          Remove
        </DropdownListItem>
      </DropdownList>
      <DropdownList>
        <DropdownListItem onClick={action('Edit onClick')}>
          Edit
        </DropdownListItem>
        <DropdownListItem onClick={action('Download onClick')}>
          Download
        </DropdownListItem>
        <DropdownListItem onClick={action('Remove onClick')}>
          Remove
        </DropdownListItem>
      </DropdownList>
    </CardActions>
  ));
