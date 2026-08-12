import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { DragHandle } from '.';

describe('DragHandle', function () {
  it('renders', () => {
    const tree = render(<DragHandle label="Reorder entry" />);

    expect(tree).toBeTruthy();
  });
  it('has no a11y issues', async () => {
    const { container } = render(<DragHandle label="drag me" />);
    await expectNoA11yViolations(container);
  });
});
