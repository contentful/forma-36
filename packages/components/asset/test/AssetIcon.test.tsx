import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { AssetIcon } from '../src/AssetIcon/AssetIcon';

it('has no a11y issues', async () => {
  const { container } = render(<AssetIcon type="presentation" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
