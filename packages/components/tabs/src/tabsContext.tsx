import React from 'react';

export const TabsContext = React.createContext({
  selectedTab: '',
  setSelectedTab: undefined,
});

export const TabsContextProvider = ({ defaultTab, currentTab, children }) => {
  const [selectedTab, setSelectedTab] = React.useState(
    currentTab ? currentTab : defaultTab,
  );
  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export function useTabsContext() {
  return React.useContext(TabsContext);
}
