import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Tag } from './Tag';

describe('Tag', () => {
  it('renders with label', () => {
    render(<Tag label="Category" />);
    expect(screen.getByText('Category')).toBeTruthy();
  });

  it('renders with custom test id', () => {
    render(<Tag label="test" testId="custom-tag" />);
    expect(screen.getByTestId('custom-tag')).toBeTruthy();
  });

  it('renders with additional class name', () => {
    const { container } = render(<Tag label="test" className="my-class" />);
    expect(container.firstChild).toHaveClass('my-class');
  });

  describe('variants', () => {
    it('renders secondary variant by default', () => {
      const { container } = render(<Tag label="test" />);
      expect(container.firstChild).toHaveStyle({
        backgroundColor: '#F7F9FA',
      });
    });

    it('renders primary variant', () => {
      const { container } = render(<Tag label="test" variant="primary" />);
      expect(container.firstChild).toHaveStyle({
        backgroundColor: '#E8F5FF',
      });
    });

    it('renders warning variant with leading icon', () => {
      render(<Tag label="test" variant="warning" />);
      const tag = screen.getByTestId('cf-ui-tag');
      expect(tag.querySelector('svg')).toBeTruthy();
    });

    it('renders negative variant with leading icon', () => {
      render(<Tag label="test" variant="negative" />);
      const tag = screen.getByTestId('cf-ui-tag');
      expect(tag.querySelector('svg')).toBeTruthy();
    });
  });

  describe('badge', () => {
    it('renders badge when provided', () => {
      render(<Tag label="test" badge={<span>Draft</span>} />);
      expect(screen.getByText('Draft')).toBeTruthy();
    });

    it('does not render badge slot when not provided', () => {
      const { container } = render(<Tag label="test" />);
      expect(container.querySelector('[class*="badge"]')).toBeNull();
    });

    it('renders badge between label and remove button', () => {
      const { container } = render(
        <Tag label="test" badge={<span>Status</span>} onRemove={() => {}} />,
      );
      const tag = container.firstChild as HTMLElement;
      const children = Array.from(tag.children);
      const labelIndex = children.findIndex((el) => el.textContent === 'test');
      const badgeIndex = children.findIndex(
        (el) => el.textContent === 'Status',
      );
      const buttonIndex = children.findIndex((el) => el.tagName === 'BUTTON');
      expect(labelIndex).toBeLessThan(badgeIndex);
      expect(badgeIndex).toBeLessThan(buttonIndex);
    });
  });

  describe('remove button', () => {
    it('renders remove button when onRemove is provided', () => {
      render(<Tag label="test" onRemove={() => {}} />);
      expect(screen.getByRole('button', { name: 'Remove' })).toBeTruthy();
    });

    it('does not render remove button when onRemove is not provided', () => {
      render(<Tag label="test" />);
      expect(screen.queryByRole('button')).toBeNull();
    });

    it('calls onRemove when remove button is clicked', () => {
      const mockOnRemove = jest.fn();
      render(<Tag label="test" onRemove={mockOnRemove} />);
      fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
      expect(mockOnRemove).toHaveBeenCalledTimes(1);
    });

    it('uses custom remove button label', () => {
      render(
        <Tag label="test" onRemove={() => {}} removeButtonLabel="Delete tag" />,
      );
      expect(screen.getByRole('button', { name: 'Delete tag' })).toBeTruthy();
    });

    it('disables remove button when isDisabled is true', () => {
      render(<Tag label="test" onRemove={() => {}} isDisabled />);
      expect(screen.getByRole('button', { name: 'Remove' })).toBeDisabled();
    });

    it('does not call onRemove when disabled', () => {
      const mockOnRemove = jest.fn();
      render(<Tag label="test" onRemove={mockOnRemove} isDisabled />);
      fireEvent.click(screen.getByRole('button', { name: 'Remove' }));
      expect(mockOnRemove).not.toHaveBeenCalled();
    });
  });

  describe('tooltip', () => {
    it('renders tooltip on leading icon when tooltipContent is provided', () => {
      render(
        <Tag label="test" variant="warning" tooltipContent="Warning info" />,
      );
      const tag = screen.getByTestId('cf-ui-tag');
      expect(tag.querySelector('svg')).toBeTruthy();
    });
  });

  describe('accessibility', () => {
    it('has no a11y violations with label only', async () => {
      const { container } = render(<Tag label="test" />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y violations with badge and remove button', async () => {
      const { container } = render(
        <Tag label="test" badge={<span>Draft</span>} onRemove={() => {}} />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y violations with disabled remove button', async () => {
      const { container } = render(
        <Tag label="test" onRemove={() => {}} isDisabled />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
