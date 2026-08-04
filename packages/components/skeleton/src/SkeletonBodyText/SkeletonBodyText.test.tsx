import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Skeleton } from '../index';

describe('SkeletonBodyText', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <Skeleton.Container>
        <Skeleton.BodyText />
      </Skeleton.Container>,
    );
    await expectNoA11yViolations(container);
  });
});
