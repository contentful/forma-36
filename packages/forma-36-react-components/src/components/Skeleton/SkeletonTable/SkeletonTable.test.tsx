import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import SkeletonTable from './SkeletonTable';

it('renders the component', () => {
  const output = shallow(<SkeletonTable>SkeletonTable</SkeletonTable>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(<SkeletonTable>SkeletonTable</SkeletonTable>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<SkeletonTable>SkeletonTable</SkeletonTable>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
