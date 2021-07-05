import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { CardDragHandle } from './CardDragHandle';

it('renders the component', () => {
  const { container } = render(<CardDragHandle>CardDragHandle</CardDragHandle>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <CardDragHandle className="my-extra-class">CardDragHandle</CardDragHandle>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with isDragActive prop set to true', () => {
  const { container } = render(
    <CardDragHandle isDragActive>CardDragHandle</CardDragHandle>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<CardDragHandle>CardDragHandle</CardDragHandle>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
