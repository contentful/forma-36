import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';
import userEvent from '@testing-library/user-event';
import { setTimeout } from 'node:timers';

import { CopyButton } from './CopyButton';

describe('CopyButton', () => {
  it('renders the component', () => {
    render(<CopyButton value="test" />);

    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <CopyButton value="test" className="my-extra-class" />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('copies the value to the clipboard', async () => {
    const user = userEvent.setup();
    const value = 'test';
    render(<CopyButton value={value} />);

    await user.click(screen.getByRole('button'));

    const clipboardText = await navigator.clipboard.readText();
    expect(clipboardText).toBe(value);
  });

  it('works with async values', async () => {
    const user = userEvent.setup();
    const value = 'test';
    const asyncValue = () =>
      // Can we make this work with a fake timer instead?
      new Promise<string>((resolve) => setTimeout(resolve, 0, value));
    render(<CopyButton value={asyncValue} />);

    const button = screen.getByRole('button');
    await user.click(button);

    await waitFor(() => {
      expect(
        screen.queryByTitle('Loading', { exact: false }),
      ).not.toBeInTheDocument();
    });

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
