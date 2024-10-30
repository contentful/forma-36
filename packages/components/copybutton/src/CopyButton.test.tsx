import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';

import { CopyButton } from './CopyButton';

describe('CopyButton', () => {
  it('renders the component', () => {
    render(<CopyButton value="test" />);

    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    render(<CopyButton value="test" className="my-extra-class" />);

    expect(screen.getByRole('button')).toHaveClass('my-extra-class');
  });

  it('copies the value to the clipboard', async () => {
    const user = userEvent.setup();
    const value = 'test';
    render(<CopyButton value={value} />);

    await user.click(screen.getByRole('button'));

    const clipboardText = await navigator.clipboard.readText();
    expect(clipboardText).toBe(value);
  });

  it('should trigger onCopy with the value when button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnCopy = jest.fn();
    const value = 'test';

    render(<CopyButton value={value} onCopy={mockOnCopy} />);
    await user.click(screen.getByRole('button'));

    expect(mockOnCopy).toHaveBeenCalledWith(value);
  });

  it('has no a11y issues', async () => {
    const { container } = render(<CopyButton value="test" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
