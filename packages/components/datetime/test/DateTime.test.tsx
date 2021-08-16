import React from 'react';
import { render } from '@testing-library/react';
import { DateTime } from '../src/DateTime';

describe('DateTime', function () {
  it('renders', () => {
    const tree = render(<DateTime>hello world</DateTime>);

    expect(tree).toBeTruthy();
  });
});
