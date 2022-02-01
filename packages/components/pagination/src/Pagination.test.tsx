import React from 'react';
import { render } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination', function () {
  it('renders', () => {
    const tree = render(<Pagination>hello world</Pagination>);

    expect(tree).toBeTruthy();
  });
});
