import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Tabs, Tab, TabPanel } from '../src';

describe('Tabs', () => {
  it('renders the component with role tablist', () => {
    const { getByRole, getAllByRole } = render(
      <Tabs>
        <Tab id="first">First</Tab>
        <Tab id="second">Second</Tab>
        <Tab id="third">Third</Tab>
      </Tabs>,
    );

    expect(getByRole('tablist')).toBeTruthy();
    expect(getAllByRole('tab')).toHaveLength(3);
  });

  it('renders the component with role navigation', () => {
    const { getByRole } = render(
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

    expect(getByRole('navigation')).toBeTruthy();
  });

  it('renders the component with extra className', () => {
    const { container } = render(
      <Tabs className="my-extra-class">
        <Tab id="first">First</Tab>
        <Tab id="second">Second</Tab>
        <Tab id="third">Third</Tab>
      </Tabs>,
    );
    expect(container.firstChild).toHaveClass('my-extra-class');
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
});
