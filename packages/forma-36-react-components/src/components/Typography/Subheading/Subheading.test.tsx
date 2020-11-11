import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../../utils/axeHelper';
import Subheading from './Subheading';

it('renders the component', () => {
  const { container } = render(<Subheading>Subheading</Subheading>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Subheading className="my-extra-class">Subheading</Subheading>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component h3', () => {
  const { container } = render(
    <Subheading element="h3">Subheading</Subheading>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Subheading>Subheading</Subheading>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
