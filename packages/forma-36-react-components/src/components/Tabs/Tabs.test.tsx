import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { TabPanel } from './TabPanel';

it('renders the component', () => {
  const { container } = render(
    <React.Fragment>
      <Tabs>
        <Tab id="first">First</Tab>
        <Tab id="second">Second</Tab>
        <Tab id="third">Third</Tab>
      </Tabs>
      <TabPanel id="first">content first panel</TabPanel>
      <TabPanel id="second">content second panel</TabPanel>
      <TabPanel id="third">content third panel</TabPanel>
    </React.Fragment>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with role=navigation and an additional class name', () => {
  const { container } = render(
    <Tabs role="navigation" className="my-extra-class">
      <Tab href="/first-link" id="first">
        First
      </Tab>
      <Tab href="/second-link" className="super-tab" id="second">
        Second
      </Tab>
      <Tab href="/third-link" id="third">
        Third
      </Tab>
    </Tabs>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component the first tab disbaled', () => {
  const { container } = render(
    <Tabs role="navigation" className="my-extra-class">
      <Tab href="/first-link" id="first" disabled>
        First
      </Tab>
      <Tab href="/second-link" className="super-tab" id="second">
        Second
      </Tab>
      <Tab href="/third-link" id="third">
        Third
      </Tab>
    </Tabs>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

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
