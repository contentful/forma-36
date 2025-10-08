import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

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
      <Card as="button" isSelected>
        Toggle
      </Card>,
    );

    const card = screen.getByTestId('cf-ui-card');
    expect(card.getAttribute('aria-pressed')).toBe('true');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Card>Card</Card>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('has no a11y issues when rendered as a div', async () => {
    const { container } = render(<Card as="div">Card</Card>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('has no a11y issues when rendered as a button', async () => {
    const { container } = render(<Card as="button">Card</Card>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('has no a11y issues when rendered as a link', async () => {
    const { container } = render(<Card as="a">Card</Card>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
