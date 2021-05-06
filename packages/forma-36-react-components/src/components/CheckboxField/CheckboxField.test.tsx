import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { CheckboxField } from './CheckboxField';

it('renders the component', () => {
  const { container } = render(
    <CheckboxField id="checkbox" label="label text" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <CheckboxField id="checkbox" label="label text" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
