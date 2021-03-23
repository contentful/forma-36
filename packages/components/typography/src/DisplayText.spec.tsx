import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../../../scripts/test/axeHelper';
import { DisplayText } from './DisplayText';

it('renders the component', () => {
  const { container } = render(<DisplayText>DisplayText</DisplayText>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <DisplayText className="my-extra-class">DisplayText</DisplayText>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component h3', () => {
  const { container } = render(<DisplayText as="h3">DisplayText</DisplayText>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a large varient', () => {
  const { container } = render(
    <DisplayText size="large">DisplayText</DisplayText>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<DisplayText>DisplayText</DisplayText>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
