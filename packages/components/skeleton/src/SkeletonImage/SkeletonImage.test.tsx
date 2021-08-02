import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { SkeletonImage } from './SkeletonImage';
import { SkeletonContainer } from '../SkeletonContainer/SkeletonContainer';

it('renders the component', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonImage />
    </SkeletonContainer>,
  );

  throw new Error('not implemented');
});

it('renders the component with a custom height', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonImage height={100} />
    </SkeletonContainer>,
  );

  throw new Error('not implemented');
});

it('renders the component with a custom width', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonImage width={100} />
    </SkeletonContainer>,
  );

  throw new Error('not implemented');
});

it('renders the component with an offset top', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonImage offsetTop={100} />
    </SkeletonContainer>,
  );

  throw new Error('not implemented');
});

it('renders the component with an offset left', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonImage offsetLeft={100} />
    </SkeletonContainer>,
  );

  throw new Error('not implemented');
});

it('renders the component with a radius x', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonImage radiusX={15} />
    </SkeletonContainer>,
  );

  throw new Error('not implemented');
});

it('renders the component with a radius y', () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonImage radiusY={15} />
    </SkeletonContainer>,
  );

  throw new Error('not implemented');
});

it('has no a11y issues', async () => {
  const { container } = render(
    <SkeletonContainer>
      <SkeletonImage />
    </SkeletonContainer>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
