import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../utils/axeHelper';
import ValidationMessage from './ValidationMessage';

it('renders the component with all required props', () => {
  const { container } = render(
    <ValidationMessage>This field is required</ValidationMessage>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <ValidationMessage className="my-extra-class">
      This field is required
    </ValidationMessage>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <ValidationMessage>This field is required</ValidationMessage>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
