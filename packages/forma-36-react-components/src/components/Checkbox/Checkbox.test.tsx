import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Checkbox from './Checkbox';

it('renders the component', () => {
  const output = shallow(<Checkbox labelText="checkbox" />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Checkbox labelText="checkbox" extraClassNames="my-extra-class" />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Checkbox labelText="checkbox" />).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
