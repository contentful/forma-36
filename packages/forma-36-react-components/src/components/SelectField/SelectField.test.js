import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import SelectField from './SelectField';
import Option from '../Select/Option';

it('renders the component', () => {
  const output = shallow(
    <SelectField id="optionSelect" name="optionSelect" labelText="Label">
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as disabled', () => {
  const output = shallow(
    <SelectField
      id="optionSelect"
      name="optionSelect"
      labelText="Label"
      isDisabled
    >
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as required', () => {
  const output = shallow(
    <SelectField id="optionSelect" name="optionSelect" labelText="Label">
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a validation message', () => {
  const output = shallow(
    <SelectField
      id="optionSelect"
      name="optionSelect"
      validationMessage="not valid"
      labelText="Label"
    >
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a help text', () => {
  const output = shallow(
    <SelectField
      labelText="Label"
      id="optionSelect"
      name="optionSelect"
      helpText="please select an option"
    >
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const output = shallow(
    <SelectField
      id="optionSelect"
      name="optionSelect"
      value="optionOne"
      labelText="Label"
    >
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <SelectField id="optionSelect" name="optionSelect" labelText="Label">
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
