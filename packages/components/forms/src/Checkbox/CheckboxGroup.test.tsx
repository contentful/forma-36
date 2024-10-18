import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

describe('CheckboxGroup', function () {
  it('renders the components', () => {
    const { getAllByRole } = render(
      <CheckboxGroup name="checkbox-options">
        <Checkbox value="option 1" id="option-1">
          Option 1
        </Checkbox>
        <Checkbox value="option 2" id="option-2">
          Option 2
        </Checkbox>
      </CheckboxGroup>,
    );

    const checkboxes = getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(2);
  });

  it('should trigger the group and individual onChange when interacting with internal checkboxes', () => {
    const mockOnChange = jest.fn();
    const mockInternalOnChange = jest.fn();
    const { getAllByRole } = render(
      <CheckboxGroup name="checkbox-options" onChange={mockOnChange}>
        <Checkbox
          onChange={mockInternalOnChange}
          value="option 1"
          id="option-1"
        >
          Option 1
        </Checkbox>
        <Checkbox value="option 2" id="option-2">
          Option 2
        </Checkbox>
      </CheckboxGroup>,
    );

    const checkboxes = getAllByRole('checkbox');
    checkboxes.forEach((checkbox, index) => {
      expect(mockOnChange).toHaveBeenCalledTimes(index);
      fireEvent.click(checkbox, { target: checkbox });
    });
    expect(mockInternalOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledTimes(checkboxes.length);
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <CheckboxGroup name="checkbox-options">
        <Checkbox value="option 1" id="option-1">
          Option 1
        </Checkbox>
        <Checkbox value="option 2" id="option-2">
          Option 2
        </Checkbox>
      </CheckboxGroup>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
