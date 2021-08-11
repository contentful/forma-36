import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { SkeletonContainer } from '../src/SkeletonContainer/SkeletonContainer';
import { SkeletonDisplayText } from '../src/SkeletonDisplayText/SkeletonDisplayText';

describe('SkeletonDisplayText', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <SkeletonContainer>
        <SkeletonDisplayText />
      </SkeletonContainer>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
