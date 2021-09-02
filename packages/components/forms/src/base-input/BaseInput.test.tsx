import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { BaseInput } from './BaseInput';

describe('InputBase', function () {
  it('renders the component with all required props', () => {
    const { getByTestId } = render(
      <BaseInput id="InputBase" testId="InputBase" />,
    );

    const input = getByTestId('InputBase');
    expect(input).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <BaseInput className="my-extra-class" id="InputBase" />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('renders the component with disabled prop', () => {
    const { getByTestId } = render(
      <BaseInput
        className="my-extra-class"
        id="InputBase"
        isDisabled
        testId="InputBase"
      />,
    );

    expect(getByTestId('InputBase')).toBeDisabled();
  });

  it('renders the component with a value', () => {
    const { getByDisplayValue } = render(
      <BaseInput className="my-extra-class" id="InputBase" value="someValue" />,
    );

    expect(getByDisplayValue('someValue')).toBeInTheDocument();
  });

  it('renders textarea when as property is set in the component', () => {
    const { container } = render(
      <BaseInput
        className="my-extra-class"
        id="InputBase"
        value="someValue"
        as="textarea"
      />,
    );
    // get textarea element from the DOM node
    const textareaElement = container.querySelector('textarea');
    expect(textareaElement).toBeInTheDocument();
  });

  it('can blur when clicking escape', () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <BaseInput
        id="InputBase"
        onBlur={onBlur}
        type="text"
        testId="InputBase"
      />,
    );
    const input = getByTestId('InputBase');
    fireEvent.keyDown(input, {
      code: 'Escape',
      target: { blur: onBlur },
    });
    expect(onBlur).toHaveBeenCalled();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <BaseInput id="InputBase" aria-label="Input base" />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
