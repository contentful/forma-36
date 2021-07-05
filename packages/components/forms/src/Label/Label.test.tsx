import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Label } from '.';

it('renders the component with all required props', () => {
  const { container } = render(<Label htmlFor="someInput">Label Text</Label>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Label htmlFor="someInput" className="my-extra-class">
      Label Text
    </Label>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an required flag', () => {
  const { container } = render(
    <Label htmlFor="someInput" required>
      Label Text
    </Label>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with required text', () => {
  const { container } = render(
    <Label htmlFor="someInput" requiredText="pflichtfeld" required>
      Label Text
    </Label>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<Label htmlFor="someInput">Label Text</Label>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
