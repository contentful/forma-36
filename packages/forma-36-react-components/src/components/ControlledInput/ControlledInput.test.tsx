import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import ControlledInput from './ControlledInput';

it('renders the component with all required props', () => {
  const output = shallow(
    <ControlledInput id="ControlledInput" labelText="ControlledInput" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      labelText="ControlledInput"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with required prop', () => {
  const output = shallow(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      labelText="ControlledInput"
      required
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with disabled prop', () => {
  const output = shallow(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      labelText="ControlledInput"
      disabled
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with as checked', () => {
  const output = shallow(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      labelText="ControlledInput"
      checked
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const output = shallow(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      labelText="ControlledInput"
      value="someValue"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <ControlledInput id="ControlledInput" labelText="ControlledInput" />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
