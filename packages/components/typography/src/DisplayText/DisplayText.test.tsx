import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { DisplayText } from './DisplayText';

it('has no a11y issues', async () => {
  const { container } = render(<DisplayText>DisplayText</DisplayText>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
