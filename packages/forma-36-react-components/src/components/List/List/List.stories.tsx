import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import List from './List';
import ListItem from '../ListItem';
import TextLink from '../../TextLink';

storiesOf('Components|List', module)
  .addParameters({
    propTypes: [List['__docgenInfo'], ListItem['__docgenInfo']],
  })
  .add('default', () => (
    <List extraClassNames={text('Extra Class Names', '')}>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2</ListItem>
      <ListItem>
        List Item with a&nbsp;
        <TextLink>text link</TextLink>&nbsp;
      </ListItem>
      <ListItem>
        <List>
          <ListItem>Sublist Item 1</ListItem>
          <ListItem>Sublist Item 2</ListItem>
        </List>
      </ListItem>
    </List>
  ));
