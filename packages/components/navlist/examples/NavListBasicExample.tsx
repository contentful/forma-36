import React from 'react';
import { NavList } from '@contentful/f36-components';

export default function NavListBasic() {
  return (
    <NavList aria-label="Content Type Sidebar">
      <NavList.Item>Fields</NavList.Item>
      <NavList.Item>Name and description</NavList.Item>
      <NavList.Item>JSON preview</NavList.Item>
      <NavList.Item>Side bar</NavList.Item>
    </NavList>
  );
}
