import React from 'react';
import { shallow } from 'enzyme';
import axe from '../../../utils/axeHelper';
import SkeletonContainer from '../SkeletonContainer';
import SkeletonDisplayText from './SkeletonDisplayText';

it('renders the component', () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonDisplayText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonDisplayText />
    </SkeletonContainer>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
