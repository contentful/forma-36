import React, { useState } from 'react';
import { NavList } from '@contentful/f36-components';

export default function NavListControlled() {
  const [active, setActive] = useState(0);
  const handleOnClick = (id) => () => {
    setActive(id);
  };
  return (
    <NavList>
      <NavList.Item
        isActive={active === 1}
        onClick={handleOnClick(1)}
        as="button"
      >
        Fields
      </NavList.Item>
      <NavList.Item
        isActive={active === 2}
        isDisabled
        onClick={handleOnClick(2)}
        as="button"
      >
        Name and description
      </NavList.Item>
      <NavList.Item
        isActive={active === 3}
        onClick={handleOnClick(3)}
        as="button"
      >
        JSON preview
      </NavList.Item>
      <NavList.Item
        isActive={active === 4}
        onClick={handleOnClick(4)}
        as="button"
      >
        Side bar
      </NavList.Item>
    </NavList>
  );
}
