import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../../../scripts/test/axeHelper';
import { SectionHeading } from './SectionHeading';

it('renders the component', () => {
  const { container } = render(<SectionHeading>SectionHeading</SectionHeading>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <SectionHeading className="my-extra-class">SectionHeading</SectionHeading>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component h3', () => {
  const { container } = render(
    <SectionHeading as="h3">SectionHeading</SectionHeading>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<SectionHeading>SectionHeading</SectionHeading>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
