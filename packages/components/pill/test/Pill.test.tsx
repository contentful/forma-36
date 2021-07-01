import React from 'react';
import { render } from '@testing-library/react';
import { Pill } from '../src/Pill';

describe('Pill', function () {
  it('renders', () => {
    const tree = render(<Pill>hello world</Pill>);

    expect(tree).toBeTruthy();
  });
});
