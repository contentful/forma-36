import React from 'react';

export const TabsContext = React.createContext({
  selectedTab: '',
  setSelectedTab: undefined,
  initialIndex: 0,
});

export const TabsContextProvider = ({
  defaultTab,
  currentTab,
  indexMap,
  children,
}) => {
  const [defaultSelectedTab, setDefaultSelectedTab] = React.useState(
    defaultTab,
  );

  return (
    <TabsContext.Provider
      value={
        currentTab
          ? {
              initialIndex: indexMap.find((item) => item.id === currentTab)
                .index,
              selectedTab: currentTab,
              setSelectedTab: () => {
                // do nothing if component is controlled
              },
            }
          : {
              initialIndex: indexMap.find(
                (item) => item.id === defaultSelectedTab,
              ).index,
              selectedTab: defaultSelectedTab,
              setSelectedTab: setDefaultSelectedTab,
            }
      }
    >
      {children}
    </TabsContext.Provider>
  );
};

export function useTabsContext() {
  return React.useContext(TabsContext);
}
