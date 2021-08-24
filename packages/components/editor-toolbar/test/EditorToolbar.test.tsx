import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { EditorToolbar } from '../src/EditorToolbar';

it('has no a11y issues', async () => {
  const { container } = render(<EditorToolbar>EditorToolbar</EditorToolbar>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
