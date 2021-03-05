import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../../utils/axeHelper';
import { Heading } from './Heading';

it('renders the component', () => {
  const { container } = render(<Heading>Heading</Heading>);

  expect(container).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Heading className="my-extra-class">Heading</Heading>,
  );

  expect(container).toMatchSnapshot();
});

it('renders the component h3', () => {
  const { container } = render(<Heading element="h3">Heading</Heading>);

  expect(container).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Heading>Heading</Heading>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
