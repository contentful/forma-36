import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import SkeletonImage from './SkeletonImage';
import SkeletonContainer from '../SkeletonContainer';

it('renders the component', () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonImage />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom height', () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonImage height={100} />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom width', () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonImage width={100} />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an offset top', () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonImage offsetTop={100} />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an offset left', () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonImage offsetLeft={100} />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <SkeletonContainer>
      <SkeletonImage />
    </SkeletonContainer>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
