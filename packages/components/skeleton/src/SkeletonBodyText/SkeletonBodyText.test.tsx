import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Skeleton } from '../index';

describe('SkeletonBodyText', () => {
  it('has no a11y issues', async () => {
    // Workaround for https://github.com/dequelabs/axe-core/issues/3055
    jest.useRealTimers();

    const { container } = render(
      <Skeleton.Container>
        <Skeleton.BodyText />
      </Skeleton.Container>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
