import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { RadioButtonField } from './RadioButtonField';

describe('RadioButtonField', function () {
  const labelText = 'radio button field';
  it('renders the component', () => {
    const { getByLabelText } = render(
      <RadioButtonField
        id="radio-button"
        inputProps={{ inputProps: { style: { color: 'red' } } }}
        label={labelText}
      />,
    );

    const input = getByLabelText(labelText);
    expect(input).toBeTruthy();
    expect(input.getAttribute('type')).toEqual('radio');
  });

  it('should trigger onChange only if not checked', () => {
    const mockOnChange = jest.fn();
    const radioButtonFieldProps = {
      id: 'radio-button',
      label: labelText,
      onChange: mockOnChange,
      value: 'testRadio',
    };
    const { getByLabelText, rerender } = render(
      <RadioButtonField {...radioButtonFieldProps} />,
    );

    const input = getByLabelText(labelText) as HTMLInputElement;
    expect(input).not.toBeChecked();
    fireEvent.click(input);
    expect(mockOnChange).toHaveBeenCalled();
    rerender(<RadioButtonField {...radioButtonFieldProps} isChecked={true} />);
    expect(input).toBeChecked();
    fireEvent.click(input);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <RadioButtonField
        id="radio-button"
        className="my-extra-class"
        label={labelText}
      />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <RadioButtonField id="radio-button" label={labelText} />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
