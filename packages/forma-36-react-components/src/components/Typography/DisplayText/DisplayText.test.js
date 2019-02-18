import React from 'react';
import { mount } from 'enzyme';
import { axe } from 'jest-axe';
import DisplayText from './DisplayText';

it('renders the component', () => {
  const output = mount(<DisplayText>DisplayText</DisplayText>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = mount(
    <DisplayText extraClassNames="my-extra-class">DisplayText</DisplayText>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component h3', () => {
  const output = mount(<DisplayText element="h3">DisplayText</DisplayText>);

  expect(output).toMatchSnapshot();
});

it('renders a large varient', () => {
  const output = mount(<DisplayText size="large">DisplayText</DisplayText>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<DisplayText>DisplayText</DisplayText>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
