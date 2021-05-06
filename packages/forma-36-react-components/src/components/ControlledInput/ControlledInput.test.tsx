import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { ControlledInput } from './ControlledInput';

it('renders the component with all required props', () => {
  const { container } = render(
    <ControlledInput id="ControlledInput" labelText="ControlledInput" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      labelText="ControlledInput"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with required prop', () => {
  const { container } = render(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      labelText="ControlledInput"
      required
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with disabled prop', () => {
  const { container } = render(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      labelText="ControlledInput"
      disabled
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with as checked', () => {
  const { container } = render(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      labelText="ControlledInput"
      checked
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const { container } = render(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      labelText="ControlledInput"
      value="someValue"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <ControlledInput id="ControlledInput" labelText="ControlledInput" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
