import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Checkbox from './Checkbox';

it('renders the component with all required props', () => {
  const output = shallow(<Checkbox id="checkbox" labelText="checkbox" />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Checkbox
      extraClassNames="my-extra-class"
      id="checkbox"
      labelText="checkbox"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with required prop', () => {
  const output = shallow(
    <Checkbox
      extraClassNames="my-extra-class"
      id="checkbox"
      labelText="checkbox"
      required
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with disabled prop', () => {
  const output = shallow(
    <Checkbox
      extraClassNames="my-extra-class"
      id="checkbox"
      labelText="checkbox"
      disabled
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with as checked', () => {
  const output = shallow(
    <Checkbox
      extraClassNames="my-extra-class"
      id="checkbox"
      labelText="checkbox"
      checked
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const output = shallow(
    <Checkbox
      extraClassNames="my-extra-class"
      id="checkbox"
      labelText="checkbox"
      value="someValue"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Checkbox id="checkbox" labelText="checkbox" />).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
