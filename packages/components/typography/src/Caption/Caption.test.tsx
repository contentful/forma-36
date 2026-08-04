import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Caption } from './Caption';

it('has no a11y issues', async () => {
  const { container } = render(<Caption>DisplayText</Caption>);
  await expectNoA11yViolations(container);
});
