import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { CopyButton } from './CopyButton';

jest.mock('@contentful/f36-core', () => ({
  ...jest.requireActual('@contentful/f36-core'),
  useId: () => {
    return 'id';
  },
}));

it('renders the component', () => {
  const { container } = render(<CopyButton />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(<CopyButton className="my-extra-class" />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a copy value', () => {
  const { container } = render(<CopyButton copyValue="test" />);

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<CopyButton />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
