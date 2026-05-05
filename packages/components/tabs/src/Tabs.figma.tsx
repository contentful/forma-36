import React from 'react';
import figma from '@figma/code-connect';
import { Tabs } from './CompoundTabs';

const FIGMA_URL =
  'https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components?node-id=1207:837';

figma.connect(Tabs, FIGMA_URL, {
  props: {
    variant: figma.enum('Divider', {
      None: 'default',
      Horizontal: 'horizontal-divider',
      Vertical: 'vertical-divider',
    }),
  },
  example: ({ variant }) => (
    <Tabs defaultTab="first">
      <Tabs.List variant={variant}>
        <Tabs.Tab panelId="first">First</Tabs.Tab>
        <Tabs.Tab panelId="second">Second</Tabs.Tab>
        <Tabs.Tab panelId="third">Third</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="first">Content for the first tab</Tabs.Panel>
      <Tabs.Panel id="second">Content for the second tab</Tabs.Panel>
      <Tabs.Panel id="third">Content for the third tab</Tabs.Panel>
    </Tabs>
  ),
});
