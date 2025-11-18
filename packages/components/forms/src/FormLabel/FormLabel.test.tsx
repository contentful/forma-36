import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { FormLabel } from './FormLabel';

describe('FormControl.Label', function () {
  const labelText = 'Label Text';
  it('renders the component with all required props', () => {
    const { getByText } = render(
      <FormLabel htmlFor="someInput">{labelText}</FormLabel>,
    );

    expect(getByText(labelText)).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { getByText } = render(
      <FormLabel htmlFor="someInput" className="my-extra-class">
        {labelText}
      </FormLabel>,
    );

    const label = getByText(labelText);
    expect(label).toHaveClass('my-extra-class');
  });

  it('renders the component with an required flag', () => {
    const { getByText } = render(
      <FormLabel htmlFor="someInput" isRequired>
        {labelText}
      </FormLabel>,
    );

    const label = getByText(labelText);
    expect(getByText(/required/)).toBeTruthy();
    expect(label.textContent).toContain('required');
  });

  it('renders the component with required text', () => {
    const requiredText = 'pflichtfeld';
    const { getByText } = render(
      <FormLabel htmlFor="someInput" requiredText={requiredText} isRequired>
        {labelText}
      </FormLabel>,
    );

    const label = getByText(labelText);
    expect(label.textContent).toContain(requiredText);
    expect(getByText(new RegExp(requiredText))).toBeTruthy();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <FormLabel htmlFor="someInput">{labelText}</FormLabel>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
