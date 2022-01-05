import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { SkeletonContainer } from '../SkeletonContainer/SkeletonContainer';
import { SkeletonText } from './SkeletonText';

describe('SkeletonText', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <SkeletonContainer>
        <SkeletonText />
      </SkeletonContainer>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
