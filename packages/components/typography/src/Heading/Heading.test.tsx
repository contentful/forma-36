import { it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Heading } from './Heading';

it('has no a11y issues', async () => {
  const { container } = render(<Heading>Heading</Heading>);
  await expectNoA11yViolations(container);
});
