import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Entry } from '@contentful/f36-icons';

import { axe } from '../../utils/axeHelper';
import { ToggleButton } from './ToggleButton';

it('renders the component', () => {
  const { container } = render(<ToggleButton>Toggle</ToggleButton>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <ToggleButton className="my-extra-class">Toggle</ToggleButton>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component active', () => {
  const { container } = render(
    <ToggleButton className="my-extra-class" isActive>
      Toggle
    </ToggleButton>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with icon', () => {
  const { container } = render(
    <ToggleButton className="my-extra-class" icon={Entry}>
      Toggle
    </ToggleButton>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('should not dispatch onClick if disabled', () => {
  const mockOnToggle = jest.fn();

  render(
    <ToggleButton className="my-extra-class" icon={Entry} isDisabled>
      Toggle
    </ToggleButton>,
  );

  const button = screen.getByText('Toggle');
  userEvent.click(button);
  expect(mockOnToggle).not.toHaveBeenCalled();
});

it('has no a11y issues', async () => {
  const { container } = render(<ToggleButton>Toggle</ToggleButton>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
