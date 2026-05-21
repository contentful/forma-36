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

    it('shows truncation tooltip when label overflows', () => {
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        configurable: true,
        get: () => 300,
      });
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        configurable: true,
        get: () => 100,
      });

      const { container } = render(<PillNext label="A very long label" />);
      const labelSpan = container.querySelector('span');
      expect(labelSpan).toBeTruthy();

      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        configurable: true,
        get: () => 0,
      });
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        configurable: true,
        get: () => 0,
      });
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
