import { describe, expect, it, vi } from 'vitest';
import React, { useRef, useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MenuItem } from '@contentful/f36-menu';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Card } from './Card';

describe('Card', () => {
  it('renders the component', () => {
    render(<Card>Card</Card>);

    expect(screen.getByText('Card')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const additionalClassName = 'my-extra-class';
    render(<Card className={additionalClassName}>Card</Card>);

    expect(
      screen.getByTestId('cf-ui-card').classList.contains(additionalClassName),
    ).toBeTruthy();
  });

  it('sets aria-pressed when rendered as button with isSelected', () => {
    render(
      <Card as="button" onClick={vi.fn()} isSelected>
        Toggle
      </Card>,
    );

    const card = screen.getByTestId('cf-ui-card');
    expect(card.getAttribute('aria-pressed')).toBe('true');
  });

  it('does not rerender children when state changes', async () => {
    const StatefulCard = () => {
      const [, setSelectedFruit] = useState<string>('');
      const inputRef = useRef(null);

      const selectItem = () => {
        inputRef.current.value = 'Apple 🍎';
        setSelectedFruit('Apple 🍎');
      };

      return (
        <Card>
          <input ref={inputRef} />
          <button onClick={() => selectItem()} type="button">
            select fruit
          </button>
        </Card>
      );
    };

    const user = userEvent.setup();
    render(<StatefulCard />);

    await user.click(screen.getByText('select fruit'));
    expect(screen.getByRole('textbox')).toHaveValue('Apple 🍎');
  });

  it('calls onClick when rendered as a link', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(
      <Card as="a" onClick={onClick}>
        Card as link
      </Card>,
    );

    await user.click(screen.getByText('Card as link'));

    expect(onClick).toHaveBeenCalled();
  });

  it('uses the provided aria-label for the actions button', () => {
    render(
      <Card
        title="Card title"
        actionsButtonProps={{ 'aria-label': 'Toggle card actions' }}
        actions={[<MenuItem key="copy">Copy</MenuItem>]}
      >
        Card
      </Card>,
    );

    expect(
      screen.getByRole('button', { name: 'Toggle card actions' }),
    ).toBeInTheDocument();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Card>Card</Card>);
    await expectNoA11yViolations(container);
  });

  it('has no a11y issues when rendered as a div', async () => {
    const { container } = render(<Card as="div">Card</Card>);
    await expectNoA11yViolations(container);
  });

  it('has no a11y issues when rendered as a button', async () => {
    const { container } = render(<Card as="button">Card</Card>);
    await expectNoA11yViolations(container);
  });

  it('has no a11y issues when rendered as a link', async () => {
    const { container } = render(<Card as="a">Card</Card>);
    await expectNoA11yViolations(container);
  });
});
