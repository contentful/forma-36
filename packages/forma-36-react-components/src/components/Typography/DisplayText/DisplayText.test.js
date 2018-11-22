import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import DisplayText from './DisplayText';

it('renders the component', () => {
  const output = shallow(<DisplayText>DisplayText</DisplayText>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <DisplayText extraClassNames="my-extra-class">DisplayText</DisplayText>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component h3', () => {
  const output = shallow(<DisplayText element="h3">DisplayText</DisplayText>);

  expect(output).toMatchSnapshot();
});

it('renders a large varient', () => {
  const output = shallow(<DisplayText size="large">DisplayText</DisplayText>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<DisplayText>DisplayText</DisplayText>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
