import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../utils/axeHelper';
import CheckboxField from './CheckboxField';

it('renders the component', () => {
  const { container } = render(
    <CheckboxField id="checkbox" labelText="label text" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <CheckboxField id="checkbox" labelText="label text" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
