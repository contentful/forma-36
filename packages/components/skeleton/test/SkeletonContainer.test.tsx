import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { SkeletonContainer } from '../src/SkeletonContainer/SkeletonContainer';
import { SkeletonBodyText } from '../src/SkeletonBodyText/SkeletonBodyText';

describe('SkeletonContainer', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <SkeletonContainer>
        <SkeletonBodyText />
      </SkeletonContainer>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
