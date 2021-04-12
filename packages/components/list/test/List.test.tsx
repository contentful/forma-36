import React from 'react';
import { render } from '@testing-library/react';
import { List } from '../src/List';

describe('List', function () {
  it('renders', () => {
    const tree = render(<List>hello world</List>);

    expect(tree).toBeTruthy();
  });
});
