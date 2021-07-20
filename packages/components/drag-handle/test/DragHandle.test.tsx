import React from 'react';
import { render } from '@testing-library/react';

import { DragHandle } from '../src/';

describe('DragHandle', function () {
  it('renders', () => {
    const tree = render(<DragHandle label="Reorder entry" />);

    expect(tree).toBeTruthy();
  });
});
