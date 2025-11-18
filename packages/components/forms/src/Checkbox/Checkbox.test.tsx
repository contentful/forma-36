import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Checkbox } from './Checkbox';

describe('Checkbox', function () {
  it('renders the component', () => {
    const { getByLabelText } = render(
      <Checkbox id="checkbox">label text</Checkbox>,
    );

    const checkbox = getByLabelText('label text');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.id).toBe('checkbox');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Checkbox id="checkbox">label text</Checkbox>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
