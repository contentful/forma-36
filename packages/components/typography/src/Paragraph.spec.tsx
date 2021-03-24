import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../../../scripts/test/axeHelper';
import { Paragraph } from './Paragraph';

it('renders the component', () => {
  const { container } = render(<Paragraph>Paragraph</Paragraph>);

  expect(container).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Paragraph className="my-extra-class">Paragraph</Paragraph>,
  );

  expect(container).toMatchSnapshot();
});

it('renders the component h3', () => {
  const { container } = render(<Paragraph as="h3">Paragraph</Paragraph>);

  expect(container).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Paragraph>Paragraph</Paragraph>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
