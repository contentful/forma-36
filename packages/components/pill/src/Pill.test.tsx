import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import tokens from '@contentful/f36-tokens';

import { Pill } from './Pill';

describe('Pill', () => {
  it('renders the component', () => {
    render(<Pill label="test" />);

    expect(screen.getByText('test')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <Pill className="my-extra-class" label="test" />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('renders the component with a dragging handle', () => {
    const mockOnDrag = jest.fn();
    const { container } = render(<Pill label="test" onDrag={mockOnDrag} />);

    const dragHandler = screen.getByText('Reorder item');
    expect(dragHandler).toBeTruthy();
    fireEvent.drag(container.firstChild);
    expect(mockOnDrag).toHaveBeenCalled();
  });

  it('renders the component with a close button', () => {
    const mockOnClose = jest.fn();
    const { container } = render(<Pill label="test" onClose={mockOnClose} />);

    const button = screen.getByRole('button');
    expect(container.firstChild).toContainElement(button);
    fireEvent.click(button);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('renders the component in "idle" variant by default', () => {
    const { container } = render(<Pill label="test" />);

    expect(container.firstChild).toHaveStyle({
      background: tokens.gray200,
    });
  });

  it('renders the component in "active" variant', () => {
    const { container } = render(<Pill label="test" variant="active" />);

    expect(container.firstChild).toHaveStyle({
      background: tokens.gray300,
    });
  });

  it('renders the component in "deleted" variant', () => {
    const { container } = render(<Pill label="test" variant="deleted" />);

    expect(container.firstChild).toHaveStyle({
      background: tokens.gray200,
      textDecoration: 'line-through',
      opacity: '0.5',
    });
  });

  it('renders the component with a test id', () => {
    render(<Pill label="test" testId="test-id" />);

    expect(screen.getByTestId('test-id')).toBeTruthy();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Pill label="test" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
