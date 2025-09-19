import React, { createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { EyeIcon } from '@contentful/f36-icons';
import { axe } from 'jest-axe';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  test('renders with provided icon and accessible name', () => {
    render(
      <IconButton
        aria-label="Show password"
        icon={<EyeIcon data-testid="eye-icon" />}
      />,
    );
    expect(
      screen.getByRole('button', { name: /show password/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('eye-icon')).toBeInTheDocument();
  });

  test('calls onClick handler', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <IconButton
        aria-label="Toggle"
        icon={<EyeIcon />}
        onClick={handleClick}
        data-testid="icon-btn"
      />,
    );
    await user.click(screen.getByTestId('icon-btn'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <IconButton
        aria-label="Toggle"
        icon={<EyeIcon />}
        onClick={handleClick}
        isDisabled
      />,
    );
    await user.click(screen.getByRole('button', { name: /toggle/i }));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('supports different size prop (snapshot of className)', () => {
    const { container } = render(
      // adjust size prop name if different (e.g. variant/size)
      <IconButton aria-label="Small button" size="small" icon={<EyeIcon />} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('forwards ref to the underlying button element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<IconButton aria-label="Focusable" icon={<EyeIcon />} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  test('exposes testId prop', () => {
    render(
      <IconButton
        aria-label="Has test id"
        icon={<EyeIcon />}
        testId="my-icon-btn"
      />,
    );
    expect(screen.getByTestId('my-icon-btn')).toBeInTheDocument();
  });

  test('is accessible (axe)', async () => {
    const { container } = render(
      <IconButton aria-label="Accessible" icon={<EyeIcon />} />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('warns (or fails) if aria-label missing (intentional negative)', () => {
    // If your component internally enforces aria-label you can skip or adapt this.
    // Here we assert no accessible name => role still present but NOT recommended.
    render(<IconButton icon={<EyeIcon />} data-testid="no-label" />);
    const btn = screen.getByTestId('no-label');
    // Accessible name should be empty string
    expect(btn).toHaveAccessibleName('');
  });

  todo.test('Tooltip behaviour');
});
