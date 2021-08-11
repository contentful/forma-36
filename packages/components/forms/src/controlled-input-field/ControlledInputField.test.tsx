import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';
import tokens from '@contentful/f36-tokens';

import { ControlledInputField } from './ControlledInputField';

describe('ControlledInputField', function () {
  const labelText = 'Label Text';

  it('renders the component', () => {
    const { getByLabelText } = render(
      <ControlledInputField id="checkbox" label={labelText} />,
    );

    const input = getByLabelText(labelText);
    expect(input).toBeTruthy();
    expect(input.id).toEqual('checkbox');
  });

  it('should trigger the onChange function when clicked', () => {
    const mockOnChange = jest.fn();
    const { getByLabelText } = render(
      <ControlledInputField
        id="checkbox"
        label={labelText}
        onChange={mockOnChange}
      />,
    );

    const input = getByLabelText(labelText);
    const label = input.nextSibling;
    fireEvent.click(label);
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <ControlledInputField
        className="my-extra-class"
        id="checkbox"
        label={labelText}
      />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('renders the component as required', () => {
    const { getByLabelText, getByText } = render(
      <ControlledInputField
        className="my-extra-class"
        id="checkbox"
        label={labelText}
        isRequired
      />,
    );

    const input = getByLabelText(/required/);
    expect(input).toBeTruthy();
    expect(input.id).toEqual('checkbox');
    const label = getByText(labelText);
    expect(label.textContent).toContain('required');
  });

  it('renders the component with a help text', () => {
    const { getByText } = render(
      <ControlledInputField
        className="my-extra-class"
        id="checkbox"
        label={labelText}
        helpText="Help Text"
      />,
    );

    expect(getByText('Help Text')).toBeTruthy();
  });

  it('renders the component with a validation message', () => {
    const { getByText } = render(
      <ControlledInputField
        className="my-extra-class"
        id="checkbox"
        label={labelText}
        validationMessage="Not valid!"
      />,
    );

    expect(getByText('Not valid!')).toBeTruthy();
  });

  it('renders the component in a disabled state', () => {
    const { getByLabelText } = render(
      <ControlledInputField
        className="my-extra-class"
        id="checkbox"
        label={labelText}
        isDisabled
      />,
    );

    const input = getByLabelText(labelText);
    expect(input).toBeDisabled();
  });

  it('renders the component with a light label variation', () => {
    const { getByText } = render(
      <ControlledInputField
        className="my-extra-class"
        id="checkbox"
        label={labelText}
        validationMessage="Not valid!"
        isLabelLight
      />,
    );

    expect(getByText(labelText)).toHaveStyle({
      fontWeight: tokens.fontWeightNormal,
    });
  });

  it('renders the component as checked', () => {
    const { getByLabelText } = render(
      <ControlledInputField
        className="my-extra-class"
        id="checkbox"
        label={labelText}
        isChecked
      />,
    );

    expect(getByLabelText(labelText)).toBeChecked();
  });

  it('renders the component with a value', () => {
    const { getByLabelText } = render(
      <ControlledInputField
        className="my-extra-class"
        id="checkbox"
        label={labelText}
        value="someValue"
      />,
    );

    const input = getByLabelText(labelText);
    expect(input.getAttribute('value')).toEqual('someValue');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <ControlledInputField id="checkbox" label={labelText} />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
