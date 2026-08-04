import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Skeleton } from '../index';

describe('SkeletonDisplayText', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <Skeleton.Container>
        <Skeleton.DisplayText />
      </Skeleton.Container>,
    );
    await expectNoA11yViolations(container);
  });
});
