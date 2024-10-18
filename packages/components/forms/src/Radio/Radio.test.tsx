import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Radio } from './Radio';

describe('Radio', function () {
  it('renders the component', () => {
    const { getByRole } = render(<Radio>radio-button</Radio>);

    expect(getByRole('radio')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <Radio className="my-extra-class">radio-button</Radio>,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Radio>radio-button</Radio>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
