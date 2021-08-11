import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { CopyButton } from '../src/CopyButton';

/**
 * This silences an error with window.prompt
 * since jestDOM doesn't implement it
 */
jest.mock('copy-to-clipboard', () => {
  return jest.fn();
});

describe('CopyButton', () => {
  it('renders the component', () => {
    const { getByRole } = render(<CopyButton value="test" />);

    expect(getByRole('button')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <CopyButton value="test" className="my-extra-class" />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('should trigger onCopy with the value when button is clicked', () => {
    const mockOnCopy = jest.fn();
    const value = 'test';
    const { getByRole } = render(
      <CopyButton value={value} onCopy={mockOnCopy} />,
    );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockOnCopy).toHaveBeenCalledWith(value);
  });

  it('has no a11y issues', async () => {
    const { container } = render(<CopyButton value="test" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
