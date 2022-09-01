import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Skeleton } from '../index';

describe('SkeletonContainer', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <Skeleton.Container>
        <Skeleton.BodyText />
      </Skeleton.Container>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
