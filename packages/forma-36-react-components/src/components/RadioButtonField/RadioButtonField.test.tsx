import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../utils/axeHelper';
import RadioButtonField from './RadioButtonField';

it('renders the component', () => {
  const { container } = render(
    <RadioButtonField
      id="radio-button"
      inputProps={{ labelText: 'radio button field' }}
      labelText="radio button field"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <RadioButtonField
      id="radio-button"
      className="my-extra-class"
      labelText="radio button field"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <RadioButtonField id="radio-button" labelText="radio button field" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
