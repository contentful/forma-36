import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Switch } from './Switch';

describe('Switch', function () {
  it('renders the component', () => {
    const { getByRole } = render(<Switch>Switch</Switch>);

    expect(getByRole('switch')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <Switch className="my-extra-class">Switch label</Switch>,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Switch>Switch</Switch>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
