import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../utils/axeHelper';
import { RadioButton } from './RadioButton';

it('renders the component', () => {
  const { container } = render(<RadioButton labelText="radio-button" />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <RadioButton labelText="radio-button" className="my-extra-class" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<RadioButton labelText="radio-button" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
