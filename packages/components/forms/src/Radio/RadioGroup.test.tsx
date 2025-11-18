import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Radio } from './Radio';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', function () {
  it('renders the components', () => {
    const { getAllByRole } = render(
      <RadioGroup name="radio-options">
        <Radio value="option 1" id="option-1">
          Option 1
        </Radio>
        <Radio value="option 2" id="option-2">
          Option 2
        </Radio>
      </RadioGroup>,
    );

    const radios = getAllByRole('radio');
    expect(radios).toHaveLength(2);
  });

  it('should trigger the group and individual onChange when interacting with internal radios', () => {
    const mockOnChange = jest.fn();
    const mockInternalOnChange = jest.fn();
    const { getAllByRole } = render(
      <RadioGroup name="radio-options" onChange={mockOnChange}>
        <Radio onChange={mockInternalOnChange} value="option 1" id="option-1">
          Option 1
        </Radio>
        <Radio value="option 2" id="option-2">
          Option 2
        </Radio>
      </RadioGroup>,
    );

    const radios = getAllByRole('radio');
    radios.forEach((radio, index) => {
      expect(mockOnChange).toHaveBeenCalledTimes(index);
      fireEvent.click(radio, { target: radio });
    });
    expect(mockInternalOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledTimes(radios.length);
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <RadioGroup name="radio-options">
        <Radio value="option 1" id="option-1">
          Option 1
        </Radio>
        <Radio value="option 2" id="option-2">
          Option 2
        </Radio>
      </RadioGroup>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
