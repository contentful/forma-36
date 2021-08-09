import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Label } from '.';

describe('Label', function () {
  const labelText = 'Label Text';
  it('renders the component with all required props', () => {
    const { getByText } = render(
      <Label htmlFor="someInput">{labelText}</Label>,
    );

    expect(getByText(labelText)).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { getByText } = render(
      <Label htmlFor="someInput" className="my-extra-class">
        {labelText}
      </Label>,
    );

    const label = getByText(labelText);
    expect(label).toHaveClass('my-extra-class');
  });

  it('renders the component with an required flag', () => {
    const { getByText } = render(
      <Label htmlFor="someInput" required>
        {labelText}
      </Label>,
    );

    const label = getByText(labelText);
    expect(getByText(/required/)).toBeTruthy();
    expect(label.textContent).toContain('required');
  });

  it('renders the component with required text', () => {
    const requiredText = 'pflichtfeld';
    const { getByText } = render(
      <Label htmlFor="someInput" requiredText={requiredText} required>
        {labelText}
      </Label>,
    );

    const label = getByText(labelText);
    expect(label.textContent).toContain(requiredText);
    expect(getByText(new RegExp(requiredText))).toBeTruthy();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Label htmlFor="someInput">{labelText}</Label>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
