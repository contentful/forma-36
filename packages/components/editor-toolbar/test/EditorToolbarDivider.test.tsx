import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { EditorToolbarDivider } from '../src/EditorToolbarDivider/EditorToolbarDivider';

it('has no a11y issues', async () => {
  const { container } = render(
    <EditorToolbarDivider>EditorToolbarDivider</EditorToolbarDivider>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
