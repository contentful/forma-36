import React from 'react';
import { List } from '@contentful/f36-components';

export default function ListWithAsExample() {
  return (
    <>
      <List as="ul">
        <List.Item>List Item 1</List.Item>
        <List.Item>List Item 2</List.Item>
        <List.Item>List Item 3</List.Item>
      </List>

      <List as="ol">
        <List.Item>List Item 1</List.Item>
        <List.Item>List Item 2</List.Item>
        <List.Item>List Item 3</List.Item>
      </List>
    </>
  );
}
