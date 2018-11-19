import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import SubHeading from './SubHeading';

it('renders the component', () => {
  const output = shallow(<SubHeading>SubHeading</SubHeading>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <SubHeading extraClassNames="my-extra-class">SubHeading</SubHeading>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component h3', () => {
  const output = shallow(<SubHeading element="h3">SubHeading</SubHeading>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<SubHeading>SubHeading</SubHeading>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
