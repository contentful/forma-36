import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Paragraph } from './Paragraph';

it('has no a11y issues', async () => {
  const { container } = render(<Paragraph>Text</Paragraph>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
