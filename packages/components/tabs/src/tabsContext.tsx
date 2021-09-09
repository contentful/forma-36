import React from 'react';

export const TabsContext = React.createContext({
  selectedTab: '',
  setSelectedTab: undefined,
});

export const TabsContextProvider = ({ defaultTab, children }) => {
  const [selectedTab, setSelectedTab] = React.useState(defaultTab);
  return (
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export function useTabsContext() {
  return React.useContext(TabsContext);
}
