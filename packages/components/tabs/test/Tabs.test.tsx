import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Tabs } from '../src/Tabs';
import { Tab } from '../src/Tab';
import { TabPanel } from '../src/TabPanel';

it('has no a11y issues', async () => {
  const { container } = render(
    <div>
      <Tabs>
        <Tab id="first">First</Tab>
        <Tab id="second">Second</Tab>
        <Tab id="third">Third</Tab>
      </Tabs>
      <TabPanel id="first">content first panel</TabPanel>
      <TabPanel id="second">content second panel</TabPanel>
      <TabPanel id="third">content third panel</TabPanel>
    </div>,
  );

  const { container: container2 } = render(
    <Tabs role="navigation">
      <Tab href="/first-link" id="first">
        First
      </Tab>
      <Tab href="/second-link" id="second">
        Second
      </Tab>
      <Tab href="/third-link" id="third">
        Third
      </Tab>
    </Tabs>,
  );
  expect(await axe(container)).toHaveNoViolations();
  expect(await axe(container2)).toHaveNoViolations();
});
