import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { DragHandle } from '.';

describe('DragHandle', function () {
  it('renders', () => {
    const tree = render(<DragHandle label="Reorder entry" />);

    expect(tree).toBeTruthy();
  });
  it('has no a11y issues', async () => {
    const { container } = render(<DragHandle label="drag me" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
