import React from 'react';
import { TabsProps } from '.';

export type TabsContextType = {
  orientation: TabsProps['variant'];
  currentTab?: TabsProps['currentTab'];
};

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

export const useTabsContext = () => {
  const context = React.useContext(TabsContext);

  if (context === undefined) {
    throw new Error('useTabsContext must be used within a TabsContextProvider');
  }

  return context;
};

export const TabsContextProvider = TabsContext.Provider;
