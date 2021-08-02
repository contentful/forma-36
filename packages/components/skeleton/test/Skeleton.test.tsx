import React from 'react';
import { render } from '@testing-library/react';
import { Skeleton } from '../src/Skeleton';

describe('Skeleton', function () {
  it('renders', () => {
    const tree = render(<Skeleton>hello world</Skeleton>);

    expect(tree).toBeTruthy();
  });
});
