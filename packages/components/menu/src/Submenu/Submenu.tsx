import React, { useMemo } from 'react';
import { Menu, MenuProps } from '../Menu';
import { useMenuContext } from '../MenuContext';
import { SubmenuContextProvider, SubmenuContextType } from '../SubmenuContext';

export type SubmenuProps = Omit<MenuProps, 'placement'>;

export const Submenu = (props: SubmenuProps) => {
  const { isOpen, menuId } = useMenuContext();

  const contextValue: SubmenuContextType = useMemo(
    () => ({
      getSubmenuListProps: () => ({
        'data-parent-menu': menuId,
      }),
    }),
    [menuId],
  );

  return (
    <SubmenuContextProvider value={contextValue}>
      <Menu
        {...props}
        placement="right-start"
        // close when parent menu closed
        isOpen={isOpen === false ? false : undefined}
      />
    </SubmenuContextProvider>
  );
};
