import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../utils/axeHelper';
import { ControlledInputField } from './ControlledInputField';

it('renders the component', () => {
  const { container } = render(
    <ControlledInputField id="checkbox" labelText="label text" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as required', () => {
  const { container } = render(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      required
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a help text', () => {
  const { container } = render(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      helpText="Help Text"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a validation message', () => {
  const { container } = render(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      validationMessage="Not valid!"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component in a disabled state', () => {
  const { container } = render(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      disabled
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a light label variation', () => {
  const { container } = render(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      validationMessage="Not valid!"
      labelIsLight
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as checked', () => {
  const { container } = render(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      checked
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const { container } = render(
    <ControlledInputField
      className="my-extra-class"
      id="checkbox"
      labelText="Label Text"
      value="someValue"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <ControlledInputField id="checkbox" labelText="label text" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
