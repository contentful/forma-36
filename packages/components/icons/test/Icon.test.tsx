import React from 'react';
import { render } from '@testing-library/react';

import { ArrowDown } from '../src/';

describe('Separate icon components', () => {
  it('renders', () => {
    const { getByTestId } = render(<ArrowDown />);

    const icon = getByTestId('cf-ui-icon');

    expect(icon.getAttribute('aria-hidden')).toEqual('true');
    expect(icon.getAttribute('viewBox')).toEqual('0 0 24 24');
  });
});
