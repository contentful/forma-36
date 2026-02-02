import * as React from 'react';
import { FloatingNode } from '@floating-ui/react';
import type { ExpandProps } from '@contentful/f36-core';
import { useMenu } from './useMenu';
import { MenuContextProvider } from './MenuContext';
import type { MenuProps } from './Menu';

export const MenuComponent = ({
  children,
  ...otherProps
}: ExpandProps<MenuProps>) => {
  const menuContext = useMenu({ ...otherProps });
  return (
    <MenuContextProvider value={menuContext}>
      <FloatingNode id={menuContext.nodeId}>{children}</FloatingNode>
    </MenuContextProvider>
  );
};
