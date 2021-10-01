import React, { ComponentPropsWithRef } from 'react';

export type MenuContextType = {
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
    _props: ComponentPropsWithRef<any>,
  ) => ComponentPropsWithRef<any>;
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
