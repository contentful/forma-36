import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EyeIcon } from '@contentful/f36-icons';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';
import { remToPx } from '@/scripts/test/remToPx';
import tokens from '@contentful/f36-tokens';

import { ToggleButton } from '.';

describe('ToggleButton', function () {
  const mockOnToggle = vi.fn();

  it('renders the component', () => {
    render(<ToggleButton onToggle={mockOnToggle}>Toggle</ToggleButton>);

    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const additionalClassName = 'my-extra-class';
    render(
      <ToggleButton onToggle={mockOnToggle} className={additionalClassName}>
        Toggle
      </ToggleButton>,
    );

    const button = screen.getByRole('button');
    expect(button.classList.contains(additionalClassName)).toBeTruthy();
  });

  it('renders the component active', () => {
    render(
      <ToggleButton onToggle={mockOnToggle} isActive>
        Toggle
      </ToggleButton>,
    );

    const button = screen.getByRole('button');
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(button.getAttribute('data-state')).toBe('on');
  });

  it('renders the component with icon', () => {
    render(
      <ToggleButton onToggle={mockOnToggle} icon={<EyeIcon />}>
        Toggle
      </ToggleButton>,
    );

    const button = screen.getByRole('button');
    expect(button.getElementsByTagName('svg')).toHaveLength(1);
  });

  it('renders the tiny size', () => {
    render(
      <ToggleButton onToggle={mockOnToggle} size="tiny">
        Toggle
      </ToggleButton>,
    );

    expect(screen.getByRole('button')).toHaveStyle({
      height: remToPx(tokens.spacingL),
      padding: `0 ${remToPx(tokens.spacingXs)}`,
    });
  });

  it.each([
    ['tiny', remToPx(tokens.spacingL), remToPx(tokens.spacing2Xs)],
    ['small', remToPx(tokens.spacingXl), remToPx(tokens.spacing2Xs)],
    ['medium', '40px', remToPx(tokens.spacingXs)],
  ] as const)(
    'renders an accessible, square %s icon-only button',
    (size, dimension, padding) => {
      render(
        <ToggleButton
          aria-label="Like"
          icon={<EyeIcon />}
          onToggle={mockOnToggle}
          size={size}
        />,
      );

      expect(screen.getByRole('button', { name: 'Like' })).toHaveStyle({
        minHeight: dimension,
        minWidth: dimension,
        padding,
      });
    },
  );

  it('should not dispatch onClick if disabled', async () => {
    const user = userEvent.setup();
    render(
      <ToggleButton onToggle={mockOnToggle} icon={<EyeIcon />} isDisabled>
        Toggle
      </ToggleButton>,
    );

    const button = screen.getByRole('button');
    await user.click(button);
    expect(mockOnToggle).not.toHaveBeenCalled();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <ToggleButton onToggle={mockOnToggle}>Toggle</ToggleButton>,
    );
    await expectNoA11yViolations(container);
  });

  it('has no a11y issues when it only displays an icon', async () => {
    const { container } = render(
      <ToggleButton
        aria-label="Like"
        icon={<EyeIcon />}
        onToggle={mockOnToggle}
        size="tiny"
      />,
    );
    await expectNoA11yViolations(container);
  });
});
