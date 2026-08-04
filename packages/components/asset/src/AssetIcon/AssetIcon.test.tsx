import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { AssetIcon } from './AssetIcon';

it('has no a11y issues', async () => {
  const { container } = render(<AssetIcon type="presentation" />);
  await expectNoA11yViolations(container);
});
