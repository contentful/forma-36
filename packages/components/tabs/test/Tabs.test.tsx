import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Tabs } from '../src';

describe('Tabs', () => {
  it('should trigger the onSelect when clicked or "enter" is pressed', () => {
    const mockOnSelect = jest.fn();
    const { getByText } = render(
      <div>
        <Tabs defaultTab="first">
          <Tabs.List>
            <Tabs.Tab panelId="first">First</Tabs.Tab>
            <Tabs.Tab panelId="second" onSelect={mockOnSelect}>
              Second
            </Tabs.Tab>
            <Tabs.Tab panelId="third">Third</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel id="first">content first panel</Tabs.Panel>
          <Tabs.Panel id="second">content second panel</Tabs.Panel>
          <Tabs.Panel id="third">content third panel</Tabs.Panel>
        </Tabs>
      </div>,
    );

    const secondTab = getByText('Second');
    fireEvent.click(secondTab);

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    fireEvent.keyPress(secondTab, { key: 'Enter', keyCode: 13, code: 'Enter' });
    expect(mockOnSelect).toHaveBeenCalledTimes(2);
  });

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
