import React from 'react';
import { shallow } from 'enzyme';
import axe from '../../../utils/axeHelper';
import SkeletonContainer from '../SkeletonContainer';
import SkeletonBodyText from './SkeletonBodyText';

it('renders the component', () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonBodyText />
    </SkeletonContainer>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = shallow(
    <SkeletonContainer>
      <SkeletonBodyText />
    </SkeletonContainer>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
