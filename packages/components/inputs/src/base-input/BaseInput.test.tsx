import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { BaseInput } from './BaseInput';

describe('InputBase', function () {
  it('renders the component with all required props', () => {
    const { getByLabelText } = render(
      <BaseInput id="InputBase" label="InputBase" />,
    );

    const input = getByLabelText('InputBase');
    expect(input).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <BaseInput className="my-extra-class" id="InputBase" label="InputBase" />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('renders the component with disabled prop', () => {
    const { getByLabelText } = render(
      <BaseInput
        className="my-extra-class"
        id="InputBase"
        label="InputBase"
        isDisabled
      />,
    );

    expect(getByLabelText('InputBase')).toBeDisabled();
  });

  it('renders the component with a value', () => {
    const { getByDisplayValue } = render(
      <BaseInput
        className="my-extra-class"
        id="InputBase"
        label="InputBase"
        value="someValue"
      />,
    );

    expect(getByDisplayValue('someValue')).toBeInTheDocument();
  });

  it('renders textarea when as property is set in the component', () => {
    const { container } = render(
      <BaseInput
        className="my-extra-class"
        id="InputBase"
        label="InputBase"
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
    const { getByLabelText } = render(
      <BaseInput
        id="InputBase"
        label="InputBase"
        onBlur={onBlur}
        type="text"
      />,
    );
    const input = getByLabelText('InputBase');
    fireEvent.keyDown(input, {
      code: 'Escape',
      target: { blur: onBlur },
    });
    expect(onBlur).toHaveBeenCalled();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <BaseInput id="InputBase" label="InputBase" />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
