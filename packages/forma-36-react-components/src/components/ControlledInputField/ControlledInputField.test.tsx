import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import ControlledInputField from './ControlledInputField';

it('renders the component', () => {
  const output = shallow(
    <ControlledInputField id="checkbox" labelText="label text" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as required', () => {
  const output = shallow(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      required
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a help text', () => {
  const output = shallow(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      helpText="Help Text"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a validation message', () => {
  const output = shallow(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      validationMessage="Not valid!"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component in a disabled state', () => {
  const output = shallow(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      disabled
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a light label variation', () => {
  const output = shallow(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      validationMessage="Not valid!"
      labelIsLight
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as checked', () => {
  const output = shallow(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      checked
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const output = shallow(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      value="someValue"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <ControlledInputField id="checkbox" labelText="label text" />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
