import { Tabs as NakedTabs } from './Tabs';
import { TabPanel } from './TabPanel';
import { Tab } from './Tab';

export { Tab } from './Tab';
export { TabPanel } from './TabPanel';
export type { TabsProps } from './Tabs';

export const Tabs = Object.assign(NakedTabs, {
  Tab: Tab,
  Panel: TabPanel,
});
