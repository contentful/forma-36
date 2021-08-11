import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';
import tokens from '@contentful/f36-tokens';

import { Pill } from '../src/Pill';

describe('Pill', () => {
  it('renders the component', () => {
    const { getByText } = render(<Pill label="test" />);

    expect(getByText('test')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <Pill className="my-extra-class" label="test" />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('renders the component with a dragging handle', () => {
    const mockOnDrag = jest.fn();
    const { getByLabelText, container } = render(
      <Pill label="test" onDrag={mockOnDrag} />,
    );

    const dragHandler = getByLabelText('Drag handler');
    expect(dragHandler).toBeTruthy();
    fireEvent.drag(container.firstChild);
    expect(mockOnDrag).toHaveBeenCalled();
  });

  it('renders the component with a close button', () => {
    const mockOnClose = jest.fn();
    const { container, getByRole } = render(
      <Pill label="test" onClose={mockOnClose} />,
    );

    const button = getByRole('button');
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
    const { getByTestId } = render(<Pill label="test" testId="test-id" />);

    expect(getByTestId('test-id')).toBeTruthy();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Pill label="test" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
