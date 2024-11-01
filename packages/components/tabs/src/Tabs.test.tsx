import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';

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

  it('switches tab panels on tab click', async () => {
    render(
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

    fireEvent.mouseDown(screen.getAllByRole('tab')[1]);
    expect(screen.getAllByRole('tab')[1]).toHaveAttribute(
      'aria-selected',
      'true',
    );
    expect(screen.getAllByRole('tab')[0]).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(screen.getAllByRole('tab')[2]).toHaveAttribute(
      'aria-selected',
      'false',
    );
    expect(screen.getByRole('tabpanel')).toHaveTextContent(
      'content second panel',
    );
  });

  it('fires `onTabChange` events', async () => {
    const mockOnTabChange = jest.fn();
    render(
      <div>
        <Tabs onTabChange={mockOnTabChange} defaultTab="first">
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

    fireEvent.mouseDown(screen.getAllByRole('tab')[1]);
    expect(mockOnTabChange).toHaveBeenCalledWith('second');
    fireEvent.mouseDown(screen.getAllByRole('tab')[2]);
    expect(mockOnTabChange).toHaveBeenCalledWith('third');
  });
});
