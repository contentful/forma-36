import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Preview } from '@contentful/f36-icons';
import { axe } from '@/scripts/test/axeHelper';

import { ToggleButton } from '../src/ToggleButton';
describe('ToggleButton', function () {
  it('renders the component', () => {
    const { container } = render(<ToggleButton>Toggle</ToggleButton>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with an additional class name', () => {
    const additionalClassName = 'my-extra-class';
    const { container } = render(
      <ToggleButton className={additionalClassName}>Toggle</ToggleButton>,
    );

    const button = screen.getByRole('button');
    expect(button.classList.contains(additionalClassName)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component active', () => {
    const { container } = render(<ToggleButton isActive>Toggle</ToggleButton>);

    const button = screen.getByRole('button');
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(button.getAttribute('data-state')).toBe('on');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with icon', () => {
    const { container } = render(
      <ToggleButton icon={Preview}>Toggle</ToggleButton>,
    );

    const button = screen.getByRole('button');
    expect(button.getElementsByTagName('svg')).toHaveLength(1);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not dispatch onClick if disabled', () => {
    const mockOnToggle = jest.fn();

    render(
      <ToggleButton icon={Preview} isDisabled>
        Toggle
      </ToggleButton>,
    );

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mockOnToggle).not.toHaveBeenCalled();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<ToggleButton>Toggle</ToggleButton>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
