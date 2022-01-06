import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Subheading } from './Subheading';

it('has no a11y issues', async () => {
  const { container } = render(<Subheading>Subheading</Subheading>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
