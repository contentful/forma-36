import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Card } from './Card';

it('has no a11y issues', async () => {
  const { container } = render(<Card>Card</Card>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('renders as an article by default', () => {
  const { container } = render(<Card>Card</Card>);

  expect(container.firstChild.nodeName).toBe('ARTICLE');
});
