import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { ControlledInput } from './ControlledInput';

describe('ControlledInput', function () {
  it('renders the component with all required props', () => {
    const { getByLabelText } = render(
      <ControlledInput id="ControlledInput" label="ControlledInput" />,
    );

    const input = getByLabelText('ControlledInput');
    expect(input).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <ControlledInput
        className="my-extra-class"
        id="ControlledInput"
        label="ControlledInput"
      />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('renders the component with required prop', () => {
    const { getByLabelText } = render(
      <ControlledInput
        className="my-extra-class"
        id="ControlledInput"
        label="ControlledInput"
        isRequired
      />,
    );

    expect(getByLabelText('ControlledInput')).toBeRequired();
  });

  it('renders the component with disabled prop', () => {
    const { getByLabelText } = render(
      <ControlledInput
        className="my-extra-class"
        id="ControlledInput"
        label="ControlledInput"
        isDisabled
      />,
    );

    expect(getByLabelText('ControlledInput')).toBeDisabled();
  });

  it('renders the component with as checked', () => {
    const { getByLabelText } = render(
      <ControlledInput
        className="my-extra-class"
        id="ControlledInput"
        label="ControlledInput"
        isChecked
      />,
    );

    expect(getByLabelText('ControlledInput')).toBeChecked();
  });

  it('renders the component with a value', () => {
    const { getByLabelText } = render(
      <ControlledInput
        className="my-extra-class"
        id="ControlledInput"
        label="ControlledInput"
        value="someValue"
      />,
    );

    expect(getByLabelText('ControlledInput').getAttribute('value')).toEqual(
      'someValue',
    );
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

  it('has no a11y issues', async () => {
    const { container } = render(
      <ControlledInput id="ControlledInput" label="ControlledInput" />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
