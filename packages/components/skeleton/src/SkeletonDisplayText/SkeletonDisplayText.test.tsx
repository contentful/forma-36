import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Skeleton } from '../index';

describe('SkeletonDisplayText', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <Skeleton.Container>
        <Skeleton.DisplayText />
      </Skeleton.Container>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
