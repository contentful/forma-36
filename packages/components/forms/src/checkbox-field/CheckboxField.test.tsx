import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { CheckboxField } from './CheckboxField';

describe('CheckboxField', function () {
  it('renders the component', () => {
    const { getByLabelText } = render(
      <CheckboxField id="checkbox" label="label text" />,
    );

    const checkbox = getByLabelText('label text');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.id).toEqual('checkbox');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <CheckboxField id="checkbox" label="label text" />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
