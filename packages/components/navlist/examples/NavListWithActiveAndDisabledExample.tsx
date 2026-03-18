import React from 'react';
import { NavList } from '@contentful/f36-components';

export default function NavListWithActiveAndDisabled() {
  return (
    <NavList>
      <NavList.Item isActive>Fields</NavList.Item>
      <NavList.Item isDisabled>Name and description</NavList.Item>
      <NavList.Item>JSON preview</NavList.Item>
      <NavList.Item>Side bar</NavList.Item>
    </NavList>
  );
}
