import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { BaseCheckbox } from './BaseCheckbox';

describe('BaseCheckbox', function () {
  const commonProps = {
    name: 'BaseCheckbox',
    id: 'BaseCheckbox',
    label: 'BaseCheckbox',
  };

  it('renders the component with all required props', () => {
    const { getByLabelText, getByRole } = render(
      <BaseCheckbox {...commonProps} />,
    );

    const input = getByLabelText(commonProps.label);
    expect(input).toBeTruthy();
    expect(input).toStrictEqual(getByRole('checkbox'));
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <BaseCheckbox {...commonProps} className="my-extra-class" />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('renders the component with disabled prop', () => {
    const { getByRole } = render(<BaseCheckbox {...commonProps} isDisabled />);

    expect(getByRole('checkbox')).toBeDisabled();
  });

  it('renders the component with a value', () => {
    const { getByDisplayValue } = render(
      <BaseCheckbox {...commonProps} value="someValue" />,
    );

    expect(getByDisplayValue('someValue')).toBeTruthy();
  });

  it('renders as radio button if type is set as radio', () => {
    const { getByRole } = render(
      <BaseCheckbox {...commonProps} value="someValue" type="radio" />,
    );

    expect(getByRole('radio')).toBeTruthy();
  });

  it('renders with role switch if type is set as switch', () => {
    const { getByRole } = render(
      <BaseCheckbox {...commonProps} value="someValue" type="switch" />,
    );

    expect(getByRole('switch')).toBeTruthy();
  });

  it('can blur when clicking escape', () => {
    const mockOnBlur = jest.fn();
    const { getByLabelText } = render(
      <BaseCheckbox {...commonProps} onBlur={mockOnBlur} willBlurOnEsc />,
    );
    const input = getByLabelText(commonProps.label);
    fireEvent.keyDown(input, {
      key: 'Escape',
      target: { blur: mockOnBlur },
    });
    expect(mockOnBlur).toHaveBeenCalled();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<BaseCheckbox {...commonProps} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
