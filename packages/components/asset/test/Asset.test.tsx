import React from 'react';
import { render } from '@testing-library/react';
import { Asset } from '../src/Asset';

describe('Asset', function () {
  it('renders', () => {
    const tree = render(<Asset>hello world</Asset>);

    expect(tree).toBeTruthy();
  });
});
