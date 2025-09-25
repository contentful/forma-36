import React from 'react';

export type MenuContextType = {
  isOpen: boolean;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setHasFocusInside: React.Dispatch<React.SetStateAction<boolean>>;
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
