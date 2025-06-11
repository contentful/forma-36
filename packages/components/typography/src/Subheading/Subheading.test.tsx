import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Subheading } from './Subheading';

it('has no a11y issues', async () => {
  // Workaround for https://github.com/dequelabs/axe-core/issues/3055
  jest.useRealTimers();

  const { container } = render(<Subheading>Subheading</Subheading>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
