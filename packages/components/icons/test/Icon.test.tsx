import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from '../src/Icon';

describe('Icon', function () {
  it('renders', () => {
    const tree = render(<Icon>hello world</Icon>);

    expect(tree).toBeTruthy();
  });
});
