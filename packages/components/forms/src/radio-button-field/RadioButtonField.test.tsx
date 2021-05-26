import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { RadioButtonField } from './RadioButtonField';

it('renders the component', () => {
  const { container } = render(
    <RadioButtonField
      id="radio-button"
      inputProps={{ inputProps: { style: { color: 'red' } } }}
      label="radio button field"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <RadioButtonField
      id="radio-button"
      className="my-extra-class"
      label="radio button field"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <RadioButtonField id="radio-button" label="radio button field" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
