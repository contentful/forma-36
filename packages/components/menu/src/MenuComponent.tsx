import { FloatingNode } from '@floating-ui/react';
import * as React from 'react';

import { useMenu } from './useMenu';
import { MenuContextProvider } from './MenuContext';
import type { MenuProps } from './Menu';

export const MenuComponent = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<MenuProps>
>(function MenuComponentInner({ children, ...otherProps }, ref) {
  const menuContext = useMenu({ ...otherProps });
  return (
    <MenuContextProvider value={menuContext}>
      <FloatingNode id={menuContext.nodeId}>
        <div ref={ref}>{children}</div>
      </FloatingNode>
    </MenuContextProvider>
  );
});
