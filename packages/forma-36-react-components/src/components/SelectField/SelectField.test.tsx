import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../utils/axeHelper';
import SelectField from './SelectField';
import Option from '../Select/Option';

it('renders the component', () => {
  const { container } = render(
    <SelectField id="optionSelect" name="optionSelect" labelText="Label">
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as disabled', () => {
  const { container } = render(
    <SelectField
      id="optionSelect"
      name="optionSelect"
      labelText="Label"
      selectProps={{
        isDisabled: true,
      }}
    >
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as required', () => {
  const { container } = render(
    <SelectField id="optionSelect" name="optionSelect" labelText="Label">
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a validation message', () => {
  const { container } = render(
    <SelectField
      id="optionSelect"
      name="optionSelect"
      validationMessage="not valid"
      labelText="Label"
    >
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a help text', () => {
  const { container } = render(
    <SelectField
      labelText="Label"
      id="optionSelect"
      name="optionSelect"
      helpText="please select an option"
    >
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const { container } = render(
    <SelectField
      id="optionSelect"
      name="optionSelect"
      value="optionOne"
      labelText="Label"
    >
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <SelectField id="optionSelect" name="optionSelect" labelText="Label">
      <Option value="optionOne">Option 1</Option>
    </SelectField>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
