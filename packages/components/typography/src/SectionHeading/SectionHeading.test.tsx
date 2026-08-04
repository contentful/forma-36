import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { SectionHeading } from './SectionHeading';

it('has no a11y issues', async () => {
  const { container } = render(<SectionHeading>SectionHeading</SectionHeading>);
  await expectNoA11yViolations(container);
});
