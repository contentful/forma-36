import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Subheading } from './Subheading';

it('has no a11y issues', async () => {
  // Workaround for https://github.com/dequelabs/axe-core/issues/3055
  vi.useRealTimers();

  const { container } = render(<Subheading>Subheading</Subheading>);
  await expectNoA11yViolations(container);
});
