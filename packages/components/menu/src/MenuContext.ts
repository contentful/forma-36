import React from 'react';
import { useMenu } from './useMenu';

export const MenuContext = React.createContext<ReturnType<
  typeof useMenu
> | null>(null);

export function useMenuContext() {
  const ctx = React.useContext(MenuContext);
  if (!ctx) {
    throw new Error(
      'useMenuContext must be used within <MenuContext.Provider>',
    );
  }
  return ctx;
}
export const MenuContextProvider = MenuContext.Provider;
