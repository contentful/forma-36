import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { DisplayText } from './DisplayText';

it('has no a11y issues', async () => {
  const { container } = render(<DisplayText>DisplayText</DisplayText>);
  await expectNoA11yViolations(container);
});
