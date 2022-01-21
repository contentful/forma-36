import React from 'react';
import { List, TextLink } from '@contentful/f36-components';

export default function ListBasicExample() {
  return (
    <List>
      <List.Item>List Item 1</List.Item>
      <List.Item>
        List Item with <TextLink>text link</TextLink>
      </List.Item>
      <List.Item>List Item 3</List.Item>
      <List.Item>
        <List>
          <List.Item>Sublist Item 1</List.Item>
          <List.Item>Sublist Item 2</List.Item>
        </List>
      </List.Item>
    </List>
  );
}
