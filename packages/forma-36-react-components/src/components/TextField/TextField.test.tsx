import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import TextField from './TextField';

it('renders the component', () => {
  const output = shallow(
    <TextField labelText="test" name="someComponent" id="someComponent" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      className="my-extra-class"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with validation message', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      validationMessage="Field is required"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with isRequired text', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      formLabelProps={{
        requiredText: 'required',
      }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with help text', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      helpText="You need to fill out this field"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a textlink', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textLinkProps={{
        icon: 'Lock',
        text: 'Unlock to edit',
        onClick: () => {},
      }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      value="1234"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with as textarea', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textarea
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a copybutton', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        withCopyButton: true,
      }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with characters count', () => {
  const output = shallow(
    <TextField
      countCharacters
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        maxLength: 20,
      }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('updates the characters counter', () => {
  const output = mount(
    <TextField
      countCharacters
      value="foo"
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        maxLength: 20,
      }}
    />,
  );

  const input = output.find('input');
  const counter = output.find('p.TextField__count');

  expect(counter.text()).toBe('3/20');

  const changeEvt = {
    target: { value: 'foobar' },
  };
  input.simulate('change', changeEvt);

  expect(counter.text()).toBe('6/20');
});

it('renders the component with small width', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        width: 'small',
      }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with max length of characters', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        maxLength: 10,
      }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a placeholder text', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        placeholder: 'placeholder',
      }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a rows defined', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        rows: 2,
      }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with additional prop', () => {
  const output = shallow(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        testId: 'test',
      }}
    />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      className="my-extra-class"
    />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
