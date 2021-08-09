import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { SkeletonImage } from '../src/SkeletonImage/SkeletonImage';
import { SkeletonContainer } from '../src/SkeletonContainer/SkeletonContainer';

describe('SkeletonImage', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <SkeletonContainer>
        <SkeletonImage />
      </SkeletonContainer>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
