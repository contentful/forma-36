import React from 'react';
import { Tabs } from '@contentful/f36-components';

export default function TabsWithHorizontalDividerExample() {
  return (
    <Tabs>
      <Tabs.List variant="horizontal-divider">
        <Tabs.Tab panelId="first">First</Tabs.Tab>
        <Tabs.Tab panelId="second">Second</Tabs.Tab>
        <Tabs.Tab panelId="third">Third</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="first">Content for the first tab</Tabs.Panel>
      <Tabs.Panel id="second">Content for the second tab</Tabs.Panel>
      <Tabs.Panel id="third">Content for the third tab</Tabs.Panel>
    </Tabs>
  );
}
