import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import TabFocusTrap from './TabFocusTrap';

it('renders the component', () => {
  const output = shallow(<TabFocusTrap>TabFocusTrap</TabFocusTrap>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <TabFocusTrap extraClassNames="my-extra-class">TabFocusTrap</TabFocusTrap>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<TabFocusTrap>TabFocusTrap</TabFocusTrap>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
