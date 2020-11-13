import React from 'react';
import { render } from '@testing-library/react';

import Switch from './Switch';

it('renders the component', () => {
  const { container } = render(<Switch id="testCheckbox" labelText="foobar" />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as checked', () => {
  const { container } = render(
    <Switch id="testCheckbox" labelText="foobar" isChecked />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as disabled', () => {
  const { container } = render(
    <Switch id="testCheckbox" labelText="foobar" isDisabled />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as disabled and checked', () => {
  const { container } = render(
    <Switch id="testCheckbox" labelText="foobar" isDisabled isChecked />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Switch id="testCheckbox" labelText="foobar" className="my-extra-class" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});
