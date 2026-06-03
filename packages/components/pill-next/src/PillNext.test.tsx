import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { PillNext } from './PillNext';

describe('PillNext', () => {
  it('renders with label', () => {
    render(<PillNext label="Category" />);
    expect(screen.getByText('Category')).toBeTruthy();
  });

  it('renders with custom test id', () => {
    render(<PillNext label="test" testId="custom-pill" />);
    expect(screen.getByTestId('custom-pill')).toBeTruthy();
  });

  it('renders with additional class name', () => {
    const { container } = render(
      <PillNext label="test" className="my-class" />,
    );
    expect(container.firstChild).toHaveClass('my-class');
  });

  describe('variants', () => {
    it('renders secondary variant by default', () => {
      const { container } = render(<PillNext label="test" />);
      expect(container.firstChild).toHaveStyle({
        backgroundColor: '#F7F9FA',
      });
    });

    it('renders primary variant', () => {
      const { container } = render(<PillNext label="test" variant="primary" />);
      expect(container.firstChild).toHaveStyle({
        backgroundColor: '#E8F5FF',
      });
    });

    it('renders warning variant with leading icon', () => {
      render(<PillNext label="test" variant="warning" />);
      const pill = screen.getByTestId('cf-ui-pill-next');
      expect(pill.querySelector('svg')).toBeTruthy();
    });

    it('renders negative variant with leading icon', () => {
      render(<PillNext label="test" variant="negative" />);
      const pill = screen.getByTestId('cf-ui-pill-next');
      expect(pill.querySelector('svg')).toBeTruthy();
    });
  });

  describe('remove button', () => {
    it('renders remove button when onRemove is provided', () => {
      render(<PillNext label="test" onRemove={() => {}} />);
      expect(screen.getByRole('button', { name: 'Remove' })).toBeTruthy();
    });

    it('does not render remove button when onRemove is not provided', () => {
      render(<PillNext label="test" />);
      expect(screen.queryByRole('button')).toBeNull();
    });

    it('calls onRemove when remove button is clicked', () => {
      const mockOnRemove = jest.fn();
      render(<PillNext label="test" onRemove={mockOnRemove} />);
      fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
      expect(mockOnRemove).toHaveBeenCalledTimes(1);
    });

    it('uses custom remove button label', () => {
      render(
        <PillNext
          label="test"
          onRemove={() => {}}
          removeButtonLabel="Delete tag"
        />,
      );
      expect(screen.getByRole('button', { name: 'Delete tag' })).toBeTruthy();
    });

    it('disables remove button when isDisabled is true', () => {
      render(<PillNext label="test" onRemove={() => {}} isDisabled />);
      expect(screen.getByRole('button', { name: 'Remove' })).toBeDisabled();
    });

    it('does not call onRemove when disabled', () => {
      const mockOnRemove = jest.fn();
      render(<PillNext label="test" onRemove={mockOnRemove} isDisabled />);
      fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
      expect(mockOnRemove).not.toHaveBeenCalled();
    });
  });

  describe('tooltip', () => {
    it('renders tooltip on leading icon when tooltipContent is provided', () => {
      render(
        <PillNext
          label="test"
          variant="warning"
          tooltipContent="This tag has a warning"
        />,
      );
      const pill = screen.getByTestId('cf-ui-pill-next');
      expect(pill.querySelector('svg')).toBeTruthy();
    });

    it('renders full label without truncation', () => {
      const longLabel = 'A very long label that should not be truncated';
      render(<PillNext label={longLabel} />);
      expect(screen.getByText(longLabel)).toBeTruthy();
    });
  });

  describe('action icon', () => {
    it('renders action button when actionIcon is provided', () => {
      const MockIcon = () => <svg data-testid="mock-icon" />;
      render(
        <PillNext
          label="test"
          actionIcon={<MockIcon />}
          onAction={() => {}}
          actionButtonLabel="Open menu"
        />,
      );
      expect(screen.getByRole('button', { name: 'Open menu' })).toBeTruthy();
    });

    it('calls onAction when action button is clicked', () => {
      const mockOnAction = jest.fn();
      const MockIcon = () => <svg data-testid="mock-icon" />;
      render(
        <PillNext
          label="test"
          actionIcon={<MockIcon />}
          onAction={mockOnAction}
          actionButtonLabel="Open menu"
        />,
      );
      fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
      expect(mockOnAction).toHaveBeenCalledTimes(1);
    });

    it('disables action button when isDisabled is true', () => {
      const MockIcon = () => <svg data-testid="mock-icon" />;
      render(
        <PillNext
          label="test"
          actionIcon={<MockIcon />}
          onAction={() => {}}
          actionButtonLabel="Open menu"
          isDisabled
        />,
      );
      expect(screen.getByRole('button', { name: 'Open menu' })).toBeDisabled();
    });

    it('takes precedence over onRemove', () => {
      const MockIcon = () => <svg data-testid="mock-icon" />;
      render(
        <PillNext
          label="test"
          actionIcon={<MockIcon />}
          onAction={() => {}}
          actionButtonLabel="Open menu"
          onRemove={() => {}}
        />,
      );
      expect(screen.getByRole('button', { name: 'Open menu' })).toBeTruthy();
      expect(screen.queryByRole('button', { name: 'Remove' })).toBeNull();
    });
  });

  describe('accessibility', () => {
    it('has no a11y violations with label only', async () => {
      const { container } = render(<PillNext label="test" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y violations with remove button', async () => {
      const { container } = render(
        <PillNext label="test" onRemove={() => {}} />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y violations with disabled remove button', async () => {
      const { container } = render(
        <PillNext label="test" onRemove={() => {}} isDisabled />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('remove button is not focusable when disabled', () => {
      render(<PillNext label="test" onRemove={() => {}} isDisabled />);
      const button = screen.getByRole('button', { name: 'Remove' });
      expect(button).toBeDisabled();
    });
  });
});
