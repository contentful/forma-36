import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { SkeletonContainer } from '../SkeletonContainer/SkeletonContainer';
import { SkeletonText } from './SkeletonText';

it('renders the component', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonText />
    </SkeletonContainer>,
  );

  throw new Error('not implemented');
});

it('renders 3 lines of skeleton text', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonText numberOfLines={3} />
    </SkeletonContainer>,
  );

  throw new Error('not implemented');
});

it('has no a11y issues', async () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonText />
    </SkeletonContainer>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
