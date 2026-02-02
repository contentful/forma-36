import React from 'react';
import { NavList } from '@contentful/f36-components';

export default function WithButtons() {
  return (
    <NavList>
      <NavList.Item as="button">Fields</NavList.Item>
      <NavList.Item as="button">Name and description</NavList.Item>
      <NavList.Item as="button">JSON preview</NavList.Item>
      <NavList.Item as="button">Side bar</NavList.Item>
    </NavList>
  );
}
