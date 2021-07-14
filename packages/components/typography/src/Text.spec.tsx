import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Text } from './Text';

it('renders the component', () => {
  const { container } = render(<Text>Text</Text>);

  expect(container).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(<Text className="my-extra-class">Text</Text>);

  expect(container).toMatchSnapshot();
});

it('renders the component h3', () => {
  const { container } = render(<Text as="h3">Text</Text>);

  expect(container).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Text>Text</Text>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
