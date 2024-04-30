import React from 'react';
import { render } from '@testing-library/react';
import { Step } from '.';

describe('Step', function () {
  it('renders', () => {
    const tree = render(<Step>hello world</Step>);

    expect(tree).toBeTruthy();
  });
});
