import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Caption } from './Caption';

it('has no a11y issues', async () => {
  const { container } = render(<Caption>DisplayText</Caption>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
