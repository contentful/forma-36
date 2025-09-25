import React from 'react';
import { useListItem, useFloatingTree } from '@floating-ui/react';
import { MenuContext } from '../MenuContext';

interface UseMenuItemOptions {
  isDisabled?: boolean;
  label?: any;
}

interface UseMenuItemReturn {
  // State
  isActive: boolean;

  // Tree and context
  item: any;
  menu: any;
  tree: any;

  // Props getters
  getItemProps: (userProps?: any) => Record<string, unknown>;
}

export function useMenuItem(
  options: UseMenuItemOptions = {},
): UseMenuItemReturn {
  const { isDisabled, label } = options;
  const menu = React.useContext(MenuContext);
  const item = useListItem({ label: isDisabled ? null : label });
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  const getItemProps = React.useCallback(
    (userProps: any = {}) => {
      return menu.getItemProps({
        ...userProps,
        onClick(event: React.MouseEvent<HTMLButtonElement>) {
          userProps.onClick?.(event);
          tree?.events.emit('click');
        },
        onFocus(event: React.FocusEvent<HTMLButtonElement>) {
          userProps.onFocus?.(event);
          menu.setHasFocusInside(true);
        },
      });
    },
    [menu, tree],
  );

  return {
    isActive,
    item,
    menu,
    tree,
    getItemProps,
  };
}
