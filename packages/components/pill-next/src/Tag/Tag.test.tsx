import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { XIcon } from '@contentful/f36-icons';

import { Tag } from './Tag';

describe('Tag', () => {
  it('renders with label', () => {
    render(<Tag label="Category" badge={<span>Draft</span>} />);
    expect(screen.getByText('Category')).toBeTruthy();
  });

  it('renders with custom test id', () => {
    render(<Tag label="test" badge={<span>1</span>} testId="custom-tag" />);
    expect(screen.getByTestId('custom-tag')).toBeTruthy();
  });

  it('renders with additional class name', () => {
    const { container } = render(
      <Tag label="test" badge={<span>1</span>} className="my-class" />,
    );
    expect(container.firstChild).toHaveClass('my-class');
  });

  describe('variants', () => {
    it('renders secondary variant by default', () => {
      const { container } = render(<Tag label="test" badge={<span>1</span>} />);
      expect(container.firstChild).toHaveStyle({
        backgroundColor: '#F7F9FA',
      });
    });

    it('renders primary variant', () => {
      const { container } = render(
        <Tag label="test" badge={<span>1</span>} variant="primary" />,
      );
      expect(container.firstChild).toHaveStyle({
        backgroundColor: '#E8F5FF',
      });
    });

    it('renders warning variant with leading icon', () => {
      render(<Tag label="test" badge={<span>1</span>} variant="warning" />);
      const tag = screen.getByTestId('cf-ui-tag');
      expect(tag.querySelector('svg')).toBeTruthy();
    });

    it('renders negative variant with leading icon', () => {
      render(<Tag label="test" badge={<span>1</span>} variant="negative" />);
      const tag = screen.getByTestId('cf-ui-tag');
      expect(tag.querySelector('svg')).toBeTruthy();
    });
  });

  describe('badge', () => {
    it('renders badge', () => {
      render(<Tag label="test" badge={<span>Draft</span>} />);
      expect(screen.getByText('Draft')).toBeTruthy();
    });

    it('renders badge between label and action button', () => {
      const { container } = render(
        <Tag
          label="test"
          badge={<span>Status</span>}
          actionIcon={<XIcon />}
          onAction={() => {}}
          actionButtonLabel="Remove"
        />,
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

  describe('action button', () => {
    it('renders action button when actionIcon is provided', () => {
      render(
        <Tag
          label="test"
          badge={<span>1</span>}
          actionIcon={<XIcon />}
          onAction={() => {}}
          actionButtonLabel="Remove"
        />,
      );
      expect(screen.getByRole('button', { name: 'Remove' })).toBeTruthy();
    });

    it('does not render action button when actionIcon is not provided', () => {
      render(<Tag label="test" badge={<span>1</span>} />);
      expect(screen.queryByRole('button')).toBeNull();
    });

    it('calls onAction when action button is clicked', () => {
      const mockOnAction = jest.fn();
      render(
        <Tag
          label="test"
          badge={<span>1</span>}
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
        <Tag
          label="test"
          badge={<span>1</span>}
          actionIcon={<XIcon />}
          onAction={() => {}}
          actionButtonLabel="Delete tag"
        />,
      );
      expect(screen.getByRole('button', { name: 'Delete tag' })).toBeTruthy();
    });

    it('disables action button when isDisabled is true', () => {
      render(
        <Tag
          label="test"
          badge={<span>1</span>}
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
        <Tag
          label="test"
          badge={<span>1</span>}
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
        <Tag
          label="test"
          badge={<span>1</span>}
          variant="warning"
          tooltipContent="Warning info"
        />,
      );
      const tag = screen.getByTestId('cf-ui-tag');
      expect(tag.querySelector('svg')).toBeTruthy();
    });
  });

  describe('accessibility', () => {
    it('has no a11y violations', async () => {
      const { container } = render(
        <Tag label="test" badge={<span>Draft</span>} />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has no a11y violations with action button', async () => {
      const { container } = render(
        <Tag
          label="test"
          badge={<span>Draft</span>}
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
        <Tag
          label="test"
          badge={<span>Draft</span>}
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
