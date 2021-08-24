import React from 'react';
import { render } from '@testing-library/react';
import { HeadingOneIcon } from '@contentful/f36-icons';
import { axe } from '@/scripts/test/axeHelper';

import { EditorToolbarButton } from '../src/EditorToolbarButton/EditorToolbarButton';

jest.mock('@contentful/f36-core', () => ({
  ...jest.requireActual('@contentful/f36-core'),
  useId: () => {
    return 'id';
  },
}));

it('has no a11y issues', async () => {
  const { container } = render(
    <EditorToolbarButton icon={HeadingOneIcon} label="H1" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
