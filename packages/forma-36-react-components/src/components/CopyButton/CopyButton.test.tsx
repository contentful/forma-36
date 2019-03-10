import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import CopyButton from './CopyButton';

it('renders the component', () => {
  const output = shallow(<CopyButton />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(<CopyButton extraClassNames="my-extra-class" />);

  expect(output).toMatchSnapshot();
});

it('renders the component with a copy value', () => {
  const output = shallow(<CopyButton copyValue="test" />);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<CopyButton />).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
