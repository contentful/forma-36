import { FloatingNode } from '@floating-ui/react';
import * as React from 'react';

import { useMenu } from './useMenu';
import { MenuContextProvider } from './MenuContext';

interface MenuComponentProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}

export const MenuComponent = React.forwardRef<
  HTMLButtonElement,
  MenuComponentProps & React.HTMLProps<HTMLButtonElement>
>(({ children, isOpen = false }) => {
  const menuContext = useMenu({ isOpen });
  return (
    <MenuContextProvider value={menuContext}>
      <FloatingNode id={menuContext.nodeId}>{children}</FloatingNode>
    </MenuContextProvider>
  );
});
