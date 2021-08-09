import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Note } from '../src/Note';
import { axe } from '@/scripts/test/axeHelper';

describe('Note', function () {
  const noteText =
    'A piece of information that is relevant to the context the user is currently in.';
  it('renders the component', () => {
    const { container } = render(<Note>{noteText}</Note>);

    expect(container.firstChild).toBeTruthy();
  });

  it('renders the component with title', () => {
    const { container, getByText } = render(
      <Note variant="positive" title="Positive title">
        {noteText}
      </Note>,
    );

    const title = getByText('Positive title');
    expect(title).toBeTruthy();
    expect(container.firstChild).toContainElement(title);
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <Note className="my-extra-class">{noteText}</Note>,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('renders the component with a close button', () => {
    const mockOnClose = jest.fn();
    const { container, getByRole } = render(
      <Note hasCloseButton onClose={mockOnClose}>
        {noteText}
      </Note>,
    );

    const button = getByRole('button');
    expect(container.firstChild).toContainElement(button);
    fireEvent.click(button);
    expect(mockOnClose).toHaveBeenCalled();
  });

  it(`has no a11y issues`, async () => {
    const { container } = render(<Note>{noteText}</Note>);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
