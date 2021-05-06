import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { ControlledInput } from './ControlledInput';

it('renders the component with all required props', () => {
  const { container } = render(
    <ControlledInput id="ControlledInput" label="ControlledInput" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      label="ControlledInput"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with required prop', () => {
  const { container } = render(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      label="ControlledInput"
      isRequired
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with disabled prop', () => {
  const { container } = render(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      label="ControlledInput"
      isDisabled
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with as checked', () => {
  const { container } = render(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      label="ControlledInput"
      isChecked
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a value', () => {
  const { container } = render(
    <ControlledInput
      className="my-extra-class"
      id="ControlledInput"
      label="ControlledInput"
      value="someValue"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <ControlledInput id="ControlledInput" label="ControlledInput" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('can blur when clicking escape', () => {
  const onBlur = jest.fn();
  const { getByRole } = render(
    <ControlledInput
      id="ControlledInput"
      label="ControlledInput"
      onBlur={onBlur}
      canBlurOnEsc
      type="checkbox"
    />,
  );
  const input = getByRole('checkbox');
  fireEvent.keyDown(input, {
    code: 'Escape',
    target: { blur: onBlur },
  });
  expect(onBlur).toHaveBeenCalled();
});
