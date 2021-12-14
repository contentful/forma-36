import { Tabs as OriginalTabs, Tab, TabPanel, TabList } from './Tabs';

type CompoundTabs = typeof OriginalTabs & {
  Panel: typeof TabPanel;
  Tab: typeof Tab;
  List: typeof TabList;
};

export const Tabs = OriginalTabs as CompoundTabs;
Tabs.Panel = TabPanel;
Tabs.Tab = Tab;
Tabs.List = TabList;
