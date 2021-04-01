import React from 'react';
import { render } from '@testing-library/react';

import { ArrowDown } from '../src/';

describe('Separate components', () => {
  it('renders', () => {
    const { baseElement } = render(<ArrowDown />);

    expect(baseElement).toMatchSnapshot();
  });
});
