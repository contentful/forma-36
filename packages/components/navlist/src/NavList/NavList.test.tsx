import React from 'react';
import { render } from '@testing-library/react';
import { NavList } from './NavList';

describe('NavList', function () {
  it('renders', () => {
    const tree = render(<NavList>hello world</NavList>);

    expect(tree).toBeTruthy();
  });
});
