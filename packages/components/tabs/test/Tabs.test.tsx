import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Tabs } from '../src';

describe('Tabs', () => {
  it('renders the component with role tablist', () => {
    const { getByRole, getAllByRole } = render(
      <Tabs>
        <Tabs.Tab id="first">First</Tabs.Tab>
        <Tabs.Tab id="second">Second</Tabs.Tab>
        <Tabs.Tab id="third">Third</Tabs.Tab>
      </Tabs>,
    );

    expect(getByRole('tablist')).toBeTruthy();
    expect(getAllByRole('tab')).toHaveLength(3);
  });

  it('renders the component with role navigation', () => {
    const { getByRole } = render(
      <Tabs role="navigation">
        <Tabs.Tab href="/first-link" id="first">
          First
        </Tabs.Tab>
        <Tabs.Tab href="/second-link" id="second">
          Second
        </Tabs.Tab>
        <Tabs.Tab href="/third-link" id="third">
          Third
        </Tabs.Tab>
      </Tabs>,
    );

    expect(getByRole('navigation')).toBeTruthy();
  });

  it('renders the component with extra className', () => {
    const { container } = render(
      <Tabs className="my-extra-class">
        <Tabs.Tab id="first">First</Tabs.Tab>
        <Tabs.Tab id="second">Second</Tabs.Tab>
        <Tabs.Tab id="third">Third</Tabs.Tab>
      </Tabs>,
    );
    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <div>
        <Tabs>
          <Tabs.Tab id="first">First</Tabs.Tab>
          <Tabs.Tab id="second">Second</Tabs.Tab>
          <Tabs.Tab id="third">Third</Tabs.Tab>
        </Tabs>
        <Tabs.Panel id="first">content first panel</Tabs.Panel>
        <Tabs.Panel id="second">content second panel</Tabs.Panel>
        <Tabs.Panel id="third">content third panel</Tabs.Panel>
      </div>,
    );

    const { container: container2 } = render(
      <Tabs role="navigation">
        <Tabs.Tab href="/first-link" id="first">
          First
        </Tabs.Tab>
        <Tabs.Tab href="/second-link" id="second">
          Second
        </Tabs.Tab>
        <Tabs.Tab href="/third-link" id="third">
          Third
        </Tabs.Tab>
      </Tabs>,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(await axe(container2)).toHaveNoViolations();
  });
});
