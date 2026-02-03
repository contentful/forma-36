import React, { useState } from 'react';
import { Tabs } from '@contentful/f36-components';
import { css } from '@emotion/css';

export default function TabsControlledWithMountedContentExample() {
  const [currentTab, setCurrentTab] = useState('first');

  const getTabPanelStyles = (isVisible) =>
    css({
      display: isVisible ? 'block' : 'none',
    });

  return (
    <Tabs currentTab={currentTab} onTabChange={setCurrentTab}>
      <Tabs.List>
        <Tabs.Tab panelId="first">First</Tabs.Tab>
        <Tabs.Tab panelId="second">Second</Tabs.Tab>
        <Tabs.Tab panelId="third">Third</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel
        id="first"
        forceMount
        className={getTabPanelStyles(currentTab === 'first')}
      >
        content first tab
      </Tabs.Panel>
      <Tabs.Panel
        id="second"
        forceMount
        className={getTabPanelStyles(currentTab === 'second')}
      >
        content second tab
      </Tabs.Panel>
      <Tabs.Panel
        id="third"
        forceMount
        className={getTabPanelStyles(currentTab === 'third')}
      >
        content third tab
      </Tabs.Panel>
    </Tabs>
  );
}
