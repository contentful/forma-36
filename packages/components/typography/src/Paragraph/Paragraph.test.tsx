import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Paragraph } from './Paragraph';

it('has no a11y issues', async () => {
  const { container } = render(<Paragraph>Text</Paragraph>);
  await expectNoA11yViolations(container);
});
