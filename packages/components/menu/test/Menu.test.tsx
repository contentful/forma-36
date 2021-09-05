import React from 'react';
import { render } from '@testing-library/react';
import { Menu } from '../src/Menu';

describe('Menu', function () {
  it('renders', () => {
    const tree = render(<Menu>hello world</Menu>);

    expect(tree).toBeTruthy();
  });
});
