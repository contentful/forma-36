import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../utils/axeHelper';
import { FormLabel } from './FormLabel';

it('renders the component with all required props', () => {
  const { container } = render(
    <FormLabel htmlFor="someInput">Label Text</FormLabel>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <FormLabel htmlFor="someInput" className="my-extra-class">
      Label Text
    </FormLabel>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an required flag', () => {
  const { container } = render(
    <FormLabel htmlFor="someInput" required>
      Label Text
    </FormLabel>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with required text', () => {
  const { container } = render(
    <FormLabel htmlFor="someInput" requiredText="pflichtfeld" required>
      Label Text
    </FormLabel>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <FormLabel htmlFor="someInput">Label Text</FormLabel>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
