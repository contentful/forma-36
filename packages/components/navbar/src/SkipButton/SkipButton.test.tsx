import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { SkipButton } from './SkipButton';

describe('SkipButton', () => {
  it('renders with title and href', () => {
    render(<SkipButton title="Skip to main content" href="#main" />);

    const button = screen.getByTestId('cf-ui-skipToMainButton');
    expect(button).toBeTruthy();
    expect(button).toHaveTextContent('Skip to main content');
    expect(button).toHaveAttribute('href', '#main');
  });

  it('accepts a custom testId', () => {
    render(
      <SkipButton
        title="Skip to main content"
        href="#main"
        testId="custom-skip"
      />,
    );

    expect(screen.getByTestId('custom-skip')).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const { container } = render(
      <SkipButton title="Skip to main content" href="#main" />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
