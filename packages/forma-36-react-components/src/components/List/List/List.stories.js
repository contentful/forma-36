import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';
import TextLink from '../../TextLink';

import List from './List';
import ListItem from '../ListItem';

storiesOf('Components|List', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
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
    )),
  );
