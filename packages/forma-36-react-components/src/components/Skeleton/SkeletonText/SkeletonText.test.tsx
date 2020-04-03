import React from 'react';
import { shallow } from 'enzyme';
import axe from '../../../utils/axeHelper';
import SkeletonContainer from '../SkeletonContainer';
import SkeletonText from './SkeletonText';

it('renders the component', () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('renders 3 lines of skeleton text', () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonText numberOfLines={3} />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonText />
    </SkeletonContainer>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
