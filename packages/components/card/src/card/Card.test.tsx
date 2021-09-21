import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Card } from './Card';

it('renders the component', () => {
  const { container } = render(<Card>Card</Card>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(<Card className="my-extra-class">Card</Card>);

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Card>Card</Card>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('renders as an article by default', () => {
  const { container } = render(<Card>Card</Card>);

  expect(container.firstChild.nodeName).toBe('ARTICLE');
});

it('can be selected', () => {
  const output = render(<Card isSelected>Card</Card>);

  expect(output).toMatchSnapshot();
});
