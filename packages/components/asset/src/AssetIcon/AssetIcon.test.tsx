import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { AssetIcon } from './AssetIcon';

it('has no a11y issues', async () => {
  const { container } = render(<AssetIcon type="presentation" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
