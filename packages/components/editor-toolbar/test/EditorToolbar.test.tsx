import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { EditorToolbar } from './EditorToolbar';

it('renders the component', () => {
  const { container } = render(<EditorToolbar>EditorToolbar</EditorToolbar>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <EditorToolbar className="my-extra-class">EditorToolbar</EditorToolbar>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<EditorToolbar>EditorToolbar</EditorToolbar>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
