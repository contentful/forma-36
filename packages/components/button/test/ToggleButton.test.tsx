import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PreviewIcon } from '@contentful/f36-icons';
import { axe } from '@/scripts/test/axeHelper';

import { ToggleButton } from '../src/ToggleButton';
describe('ToggleButton', function () {
  it('renders the component', () => {
    render(<ToggleButton>Toggle</ToggleButton>);

    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const additionalClassName = 'my-extra-class';
    render(<ToggleButton className={additionalClassName}>Toggle</ToggleButton>);

    const button = screen.getByRole('button');
    expect(button.classList.contains(additionalClassName)).toBeTruthy();
  });

  it('renders the component active', () => {
    render(<ToggleButton isActive>Toggle</ToggleButton>);

    const button = screen.getByRole('button');
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(button.getAttribute('data-state')).toBe('on');
  });

  it('renders the component with icon', () => {
    render(<ToggleButton icon={<PreviewIcon />}>Toggle</ToggleButton>);

    const button = screen.getByRole('button');
    expect(button.getElementsByTagName('svg')).toHaveLength(1);
  });

  it('should not dispatch onClick if disabled', () => {
    const mockOnToggle = jest.fn();

    render(
      <ToggleButton onToggle={mockOnToggle} icon={<PreviewIcon />} isDisabled>
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
