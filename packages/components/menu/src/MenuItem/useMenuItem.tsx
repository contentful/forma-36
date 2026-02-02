import React from 'react';
import {
  useListItem,
  useFloatingTree,
  type FloatingTreeType,
} from '@floating-ui/react';
import { MenuContext } from '../MenuContext';

interface UseMenuItemReturn {
  // State
  isActive: boolean;

  // Tree and context
  item: ReturnType<typeof useListItem>;
  menu: React.ContextType<typeof MenuContext>;
  tree: FloatingTreeType | null;

  // Props getters
  getItemProps: (
    userProps?: React.ButtonHTMLAttributes<HTMLButtonElement>,
  ) => Record<string, unknown>;
}

export function useMenuItem(): UseMenuItemReturn {
  const menu = React.useContext(MenuContext);
  const item = useListItem();
  const tree = useFloatingTree();
  const isActive = item.index === menu.activeIndex;

  const getItemProps = React.useCallback(
    (userProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {}) => {
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
