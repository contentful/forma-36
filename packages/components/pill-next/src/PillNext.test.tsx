import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { XIcon } from '@contentful/f36-icons';

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

  describe('action button', () => {
    it('renders action button when actionIcon is provided', () => {
      render(
        <PillNext
          label="test"
          actionIcon={<XIcon />}
          onAction={() => {}}
          actionButtonLabel="Remove"
        />,
      );
      expect(screen.getByRole('button', { name: 'Remove' })).toBeTruthy();
    });

    it('does not render action button when actionIcon is not provided', () => {
      render(<PillNext label="test" />);
      expect(screen.queryByRole('button')).toBeNull();
    });

    it('calls onAction when action button is clicked', () => {
      const mockOnAction = jest.fn();
      render(
        <PillNext
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
        <PillNext
          label="test"
          actionIcon={<XIcon />}
          onAction={() => {}}
          actionButtonLabel="Delete tag"
        />,
      );
      expect(screen.getByRole('button', { name: 'Delete tag' })).toBeTruthy();
    });

    it('disables action button when isDisabled is true', () => {
      render(
        <PillNext
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
        <PillNext
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


  describe('accessibility', () => {
    it('has no a11y violations with label only', async () => {
      const { container } = render(<PillNext label="test" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y violations with action button', async () => {
      const { container } = render(
        <PillNext
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
        <PillNext
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

    it('action button is not focusable when disabled', () => {
      render(
        <PillNext
          label="test"
          actionIcon={<XIcon />}
          onAction={() => {}}
          actionButtonLabel="Remove"
          isDisabled
        />,
      );
      const button = screen.getByRole('button', { name: 'Remove' });
      expect(button).toBeDisabled();
    });
  });
});
