import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../../utils/axeHelper';
import SkeletonContainer from '../SkeletonContainer';
import SkeletonText from './SkeletonText';

it('renders the component', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonText />
    </SkeletonContainer>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders 3 lines of skeleton text', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonText numberOfLines={3} />
    </SkeletonContainer>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonText />
    </SkeletonContainer>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
