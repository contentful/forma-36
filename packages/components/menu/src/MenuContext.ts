import React, { ComponentPropsWithRef } from 'react';
import { MenuProps } from '.';

export type MenuContextType = {
  isOpen: boolean;
  menuId: string;
  focusMenuItem: (item: HTMLElement) => void;
  getTriggerProps: (
    _props: ComponentPropsWithRef<'button'>,
    _ref: React.Ref<HTMLButtonElement>,
  ) => ComponentPropsWithRef<'button'>;
  getMenuListProps: (
    _props: ComponentPropsWithRef<'div'>,
    _ref: React.Ref<HTMLDivElement>,
  ) => ComponentPropsWithRef<'div'>;
  getMenuItemProps: (
    _props: ComponentPropsWithRef<'button'>,
  ) => ComponentPropsWithRef<'button'>;
  propsToPropagateToSubmenus: Pick<
    MenuProps,
    'closeOnBlur' | 'closeOnEsc' | 'closeOnSelect'
  >;
};

const MenuContext = React.createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = () => {
  const context = React.useContext(MenuContext);

  if (context === undefined) {
    throw new Error('useMenuContext must be used within a MenuContextProvider');
  }

  return context;
};

export const MenuContextProvider = MenuContext.Provider;
