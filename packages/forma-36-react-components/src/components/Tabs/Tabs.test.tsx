import React from 'react';
import { mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import Tabs from './Tabs';
import Tab from './Tab';
import TabPanel from './TabPanel';

it('renders the component', () => {
  const output = mount(
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

  expect(output).toMatchSnapshot();
});

it('renders the component with role=navigation and an additional class name', () => {
  const output = mount(
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

  expect(output).toMatchSnapshot();
});

it('renders the component the first tab disbaled', () => {
  const output = mount(
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

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
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
  ).html();

  const output2 = mount(
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
  ).html();
  expect(await axe(output)).toHaveNoViolations();
  expect(await axe(output2)).toHaveNoViolations();
});
