import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Tabs } from '.';

describe('Tabs', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <div>
        <Tabs defaultTab="first">
          <Tabs.List>
            <Tabs.Tab panelId="first">First</Tabs.Tab>
            <Tabs.Tab panelId="second">Second</Tabs.Tab>
            <Tabs.Tab panelId="third">Third</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel id="first">content first panel</Tabs.Panel>
          <Tabs.Panel id="second">content second panel</Tabs.Panel>
          <Tabs.Panel id="third">content third panel</Tabs.Panel>
        </Tabs>
      </div>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
