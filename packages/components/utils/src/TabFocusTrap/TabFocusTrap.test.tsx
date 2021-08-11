import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { TabFocusTrap } from './TabFocusTrap';

describe('TabFocusTrap', () => {
  it('renders the component', () => {
    const { getByText } = render(<TabFocusTrap>TabFocusTrap</TabFocusTrap>);

    expect(getByText('TabFocusTrap')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <TabFocusTrap className="my-extra-class">TabFocusTrap</TabFocusTrap>,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<TabFocusTrap>TabFocusTrap</TabFocusTrap>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
