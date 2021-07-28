import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Lock } from '@contentful/f36-icons';
import { axe } from '@/scripts/test/axeHelper';

import { TextField } from './TextField';

jest.mock('@contentful/f36-core', () => ({
  ...jest.requireActual('@contentful/f36-core'),
  useId: () => {
    return 'id';
  },
}));

it('renders the component', () => {
  const { container } = render(
    <TextField labelText="test" name="someComponent" id="someComponent" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      className="my-extra-class"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with validation message', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      validationMessage="Field is required"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with required text', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      formLabelProps={{
        requiredText: 'required',
      }}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with help text', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      helpText="You need to fill out this field"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a textlink', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textLinkProps={{
        icon: Lock,
        children: 'Unlock to edit',
        onClick: () => {},
      }}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      value="1234"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('updates the value', () => {
  const { container } = render(
    <TextField
      id="someComponent"
      name="someComponent"
      labelText="test"
      data-test-id="input"
      value=""
    />,
  );

  const input = container.querySelector(
    '[data-test-id="cf-ui-text-field"] input',
  );

  userEvent.type(input, 'new value');

  expect(screen.getByDisplayValue('new value')).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with as textarea', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textarea
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a copybutton', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        withCopyButton: true,
      }}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with characters count', () => {
  const { container } = render(
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

  expect(container.firstChild).toMatchSnapshot();
});

it('updates the characters counter', () => {
  render(
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

  const counter = screen.getByText('3/20');

  userEvent.type(screen.getByLabelText('test'), 'bar');
  expect(counter.textContent).toBe('6/20');
});

it('renders the component with small width', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      width="full"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with max length of characters', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        maxLength: 10,
      }}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a placeholder text', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        placeholder: 'placeholder',
      }}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a rows defined', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        rows: 2,
      }}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with additional prop', () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      textInputProps={{
        testId: 'test',
      }}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <TextField
      labelText="test"
      name="someComponent"
      id="someComponent"
      className="my-extra-class"
    />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
