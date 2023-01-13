import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';
import userEvent from '@testing-library/user-event';

import { CopyButton } from './CopyButton';

const mockedWriteText = jest.fn().mockImplementation(() => Promise.resolve());

describe('CopyButton', () => {
  it('renders the component', () => {
    render(<CopyButton value="test" />);

    expect(screen.getByRole('button')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <CopyButton value="test" className="my-extra-class" />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('copies the value to the clipboard', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: mockedWriteText,
      },
    });

    const user = userEvent.setup();
    const value = 'test';

    render(<CopyButton value={value} />);
    await user.click(screen.getByRole('button'));

    expect(mockedWriteText).toHaveBeenCalledWith(value);
  });

  it('works with async values', async () => {
    Object.assign(navigator, {
      clipboard: {
        writeText: mockedWriteText,
      },
    });

    const user = userEvent.setup();
    const value = 'test';
    const asyncValue = async () =>
      new Promise<string>((resolve) => setTimeout(resolve, 3000, value));

    render(<CopyButton value={asyncValue} />);
    await user.click(screen.getByRole('button'));

    expect(mockedWriteText).toHaveBeenCalledWith(value);
  });

  it('should trigger onCopy with the value when button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnCopy = jest.fn();
    const value = 'test';

    render(<CopyButton value={value} onCopy={mockOnCopy} />);
    await user.click(screen.getByRole('button'));

    expect(mockOnCopy).toHaveBeenCalledWith(value);
  });

  it('has no a11y issues', async () => {
    // Workaround for https://github.com/dequelabs/axe-core/issues/3055
    jest.useRealTimers();

    const { container } = render(<CopyButton value="test" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
