import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Collapse } from './Collapse';

it('has no a11y issues', async () => {
  const { container } = render(<Collapse isExpanded>Collapse me </Collapse>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
