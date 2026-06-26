import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { PlusIcon, XIcon } from '@contentful/f36-icons';

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

  it('does not render action button when no actionIcon is provided', () => {
    render(<AiPill label="test" />);
    expect(screen.queryByRole('button')).toBeNull();
  });

  describe('action button', () => {
    it('renders action button when actionIcon is provided', () => {
      render(
        <AiPill
          label="test"
          actionIcon={<XIcon />}
          onAction={() => {}}
          actionButtonLabel="Remove"
        />,
      );
      expect(screen.getByRole('button', { name: 'Remove' })).toBeTruthy();
    });

    it('calls onAction when action button is clicked', () => {
      const mockOnAction = jest.fn();
      render(
        <AiPill
          label="test"
          actionIcon={<XIcon />}
          onAction={mockOnAction}
          actionButtonLabel="Remove"
        />,
      );
      fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it('uses custom action button label', () => {
      render(
        <AiPill
          label="test"
          actionIcon={<PlusIcon />}
          onAction={() => {}}
          actionButtonLabel="Add suggestion"
        />,
      );
      expect(
        screen.getByRole('button', { name: 'Add suggestion' }),
      ).toBeTruthy();
    });

    it('disables action button when isDisabled is true', () => {
      render(
        <AiPill
          label="test"
          actionIcon={<XIcon />}
          onAction={() => {}}
          actionButtonLabel="Remove"
          isDisabled
        />,
      );
      expect(screen.getByRole('button', { name: 'Remove' })).toBeDisabled();
    });

    it('does not call onAction when disabled', () => {
      const mockOnAction = jest.fn();
      render(
        <AiPill
          label="test"
          actionIcon={<XIcon />}
          onAction={mockOnAction}
          actionButtonLabel="Remove"
          isDisabled
        />,
      );
      fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
      expect(mockOnAction).not.toHaveBeenCalled();
    });

    it('works with any icon (PlusIcon)', () => {
      render(
        <AiPill
          label="test"
          actionIcon={<PlusIcon />}
          onAction={() => {}}
          actionButtonLabel="Add"
        />,
      );
      expect(screen.getByRole('button', { name: 'Add' })).toBeTruthy();
    });
  });

  describe('accessibility', () => {
    it('has no a11y violations with label only', async () => {
      const { container } = render(<AiPill label="test" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y violations with action button', async () => {
      const { container } = render(
        <AiPill
          label="test"
          actionIcon={<XIcon />}
          onAction={() => {}}
          actionButtonLabel="Remove"
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y violations with disabled action button', async () => {
      const { container } = render(
        <AiPill
          label="test"
          actionIcon={<XIcon />}
          onAction={() => {}}
          actionButtonLabel="Remove"
          isDisabled
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
