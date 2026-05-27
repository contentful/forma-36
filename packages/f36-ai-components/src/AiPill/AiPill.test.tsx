import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { AiPill } from './AiPill';

describe('AiPill', () => {
  it('renders with label', () => {
    render(<AiPill label="AI suggested" />);
    expect(screen.getByText('AI suggested')).toBeTruthy();
  });

  it('renders with custom test id', () => {
    render(<AiPill label="test" testId="custom-ai-pill" />);
    expect(screen.getByTestId('custom-ai-pill')).toBeTruthy();
  });

  it('renders with additional class name', () => {
    const { container } = render(<AiPill label="test" className="my-class" />);
    expect(container.firstChild).toHaveClass('my-class');
  });

  it('renders gradient background', () => {
    const { container } = render(<AiPill label="test" />);
    const pill = container.firstChild as HTMLElement;
    expect(pill.style || pill.className).toBeTruthy();
  });

  describe('remove button', () => {
    it('renders remove button when onRemove is provided', () => {
      render(<AiPill label="test" onRemove={() => {}} />);
      expect(screen.getByRole('button', { name: 'Remove' })).toBeTruthy();
    });

    it('does not render remove button when onRemove is not provided', () => {
      render(<AiPill label="test" />);
      expect(screen.queryByRole('button')).toBeNull();
    });

    it('calls onRemove when remove button is clicked', () => {
      const mockOnRemove = jest.fn();
      render(<AiPill label="test" onRemove={mockOnRemove} />);
      fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
      expect(mockOnRemove).toHaveBeenCalledTimes(1);
    });

    it('uses custom remove button label', () => {
      render(
        <AiPill
          label="test"
          onRemove={() => {}}
          removeButtonLabel="Delete suggestion"
        />,
      );
      expect(
        screen.getByRole('button', { name: 'Delete suggestion' }),
      ).toBeTruthy();
    });

    it('disables remove button when isDisabled is true', () => {
      render(<AiPill label="test" onRemove={() => {}} isDisabled />);
      expect(screen.getByRole('button', { name: 'Remove' })).toBeDisabled();
    });

    it('does not call onRemove when disabled', () => {
      const mockOnRemove = jest.fn();
      render(<AiPill label="test" onRemove={mockOnRemove} isDisabled />);
      fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
      expect(mockOnRemove).not.toHaveBeenCalled();
    });
  });

  describe('accessibility', () => {
    it('has no a11y violations with label only', async () => {
      const { container } = render(<AiPill label="test" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y violations with remove button', async () => {
      const { container } = render(<AiPill label="test" onRemove={() => {}} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y violations with disabled remove button', async () => {
      const { container } = render(
        <AiPill label="test" onRemove={() => {}} isDisabled />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
