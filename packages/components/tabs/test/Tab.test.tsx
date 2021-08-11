import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Tab } from '../src';

describe('Tab', () => {
  it('renders the component with role tab', () => {
    const { getByRole } = render(<Tab id="first">First</Tab>);

    expect(getByRole('tab')).toBeTruthy();
    expect(getByRole('tab').getAttribute('aria-controls')).toEqual('first');
  });

  it('renders the component with extra className', () => {
    const { container } = render(
      <Tab className="my-extra-class" id="first">
        First
      </Tab>,
    );
    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('renders the component as selected', () => {
    const { getByRole } = render(
      <Tab isSelected id="first">
        First
      </Tab>,
    );

    expect(getByRole('tab').getAttribute('aria-selected')).toBeTruthy();
  });

  it('renders the component as disabled', () => {
    const { getByRole } = render(
      <Tab isDisabled id="first">
        First
      </Tab>,
    );

    expect(getByRole('tab').getAttribute('aria-disabled')).toBeTruthy();
  });

  it('should trigger the onSelect when clicked or "enter" is pressed', () => {
    const mockOnSelect = jest.fn();
    const { getByRole } = render(
      <Tab onSelect={mockOnSelect} id="first">
        First
      </Tab>,
    );

    const tab = getByRole('tab');
    fireEvent.click(tab);
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    fireEvent.keyPress(tab, { key: 'Enter', keyCode: 13, code: 'Enter' });
    expect(mockOnSelect).toHaveBeenCalledTimes(2);
  });
});
