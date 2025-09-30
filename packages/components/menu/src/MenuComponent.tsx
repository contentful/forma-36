import { FloatingNode } from '@floating-ui/react';
import * as React from 'react';

import { useMenu } from './useMenu';
import { MenuContextProvider } from './MenuContext';
import type { MenuProps } from './Menu';

export const MenuComponent = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<MenuProps>
>(({ children, isOpen = false, defaultIsOpen = false, ...otherProps }) => {
  const menuContext = useMenu({ isOpen, defaultIsOpen, ...otherProps });
  return (
    <MenuContextProvider value={menuContext}>
      <FloatingNode id={menuContext.nodeId}>{children}</FloatingNode>
    </MenuContextProvider>
  );
});
