import { Tabs as OriginalTabs } from './Tabs';
import { TabPanel } from './TabPanel';
import { Tab } from './Tab';

type CompoundTabs = typeof OriginalTabs & {
  Panel: typeof TabPanel;
  Tab: typeof Tab;
};

export const Tabs = OriginalTabs as CompoundTabs;
Tabs.Panel = TabPanel;
Tabs.Tab = Tab;
