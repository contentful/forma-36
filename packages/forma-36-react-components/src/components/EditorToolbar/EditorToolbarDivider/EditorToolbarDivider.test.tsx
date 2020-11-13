import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../../utils/axeHelper';
import EditorToolbarDivider from './EditorToolbarDivider';

it('renders the component', () => {
  const { container } = render(
    <EditorToolbarDivider>EditorToolbarDivider</EditorToolbarDivider>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <EditorToolbarDivider className="my-extra-class">
      EditorToolbarDivider
    </EditorToolbarDivider>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <EditorToolbarDivider>EditorToolbarDivider</EditorToolbarDivider>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
