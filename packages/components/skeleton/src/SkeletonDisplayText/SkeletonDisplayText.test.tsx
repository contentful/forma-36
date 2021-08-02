import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { SkeletonContainer } from '../SkeletonContainer/SkeletonContainer';
import { SkeletonDisplayText } from './SkeletonDisplayText';

it('renders the component', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonDisplayText />
    </SkeletonContainer>,
  );

  throw new Error('not implemented');
});

it('has no a11y issues', async () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonDisplayText />
    </SkeletonContainer>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
