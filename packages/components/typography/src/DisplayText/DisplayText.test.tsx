import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { DisplayText } from './DisplayText';

it('has no a11y issues', async () => {
  // Workaround for https://github.com/dequelabs/axe-core/issues/3055
  jest.useRealTimers();

  const { container } = render(<DisplayText>DisplayText</DisplayText>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
