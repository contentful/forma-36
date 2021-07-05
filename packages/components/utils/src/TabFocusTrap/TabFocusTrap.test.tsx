import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { TabFocusTrap } from './TabFocusTrap';

it('renders the component', () => {
  const { container } = render(<TabFocusTrap>TabFocusTrap</TabFocusTrap>);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <TabFocusTrap className="my-extra-class">TabFocusTrap</TabFocusTrap>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<TabFocusTrap>TabFocusTrap</TabFocusTrap>);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
