import React, { createRef } from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { EyeIcon } from '@contentful/f36-icons';
import { axe } from 'jest-axe';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders with provided icon and accessible name', () => {
    render(
      <IconButton
        aria-label="Show password"
        icon={<EyeIcon testId="eye-icon" />}
      />,
    );
    expect(
      screen.getByRole('button', { name: /show password/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('eye-icon')).toBeInTheDocument();
  });

  it('calls onClick handler', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(
      <IconButton
        aria-label="Toggle"
        icon={<EyeIcon />}
        onClick={handleClick}
        testId="icon-btn"
      />,
    );
    await user.click(screen.getByTestId('icon-btn'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
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

  it('forwards ref to the underlying button element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<IconButton aria-label="Focusable" icon={<EyeIcon />} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('exposes testId prop', () => {
    render(
      <IconButton
        aria-label="Has test id"
        icon={<EyeIcon />}
        testId="my-icon-btn"
      />,
    );
    expect(screen.getByTestId('my-icon-btn')).toBeInTheDocument();
  });

  it('is accessible (axe)', async () => {
    const { container } = render(
      <IconButton aria-label="Accessible" icon={<EyeIcon />} />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('warns (or fails) if aria-label missing (intentional negative)', () => {
    // If your component internally enforces aria-label you can skip or adapt this.
    // Here we assert no accessible name => role still present but NOT recommended.
    // @ts-expect-error intentional: missing aria-label to test accessibility enforcement
    render(<IconButton icon={<EyeIcon />} testId="no-label" />);
    const btn = screen.getByTestId('no-label');
    // Accessible name should be empty string
    expect(btn).toHaveAccessibleName('');
  });

  // TODO: Implement tooltip behavior tests:
  // - Tooltip appears on hover and focus
  // - Tooltip hides on mouse leave and blur
  // - Accessible name / aria-describedby linkage
  // - No tooltip rendered when disabled
  test.todo('tooltip behavior (hover, focus, accessibility)');
});
