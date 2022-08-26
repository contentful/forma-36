import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Heading } from './Heading';

it('has no a11y issues', async () => {
  const { container } = render(<Heading>Heading</Heading>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
