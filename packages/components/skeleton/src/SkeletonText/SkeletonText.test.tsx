import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Skeleton } from '../index';

describe('SkeletonText', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <Skeleton.Container>
        <Skeleton.Text />
      </Skeleton.Container>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
