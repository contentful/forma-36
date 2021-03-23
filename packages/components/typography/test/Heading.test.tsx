import React from 'react';
import { render } from '@testing-library/react';
import { Heading } from '../src/Heading';

describe('Heading', function () {
  it('renders', () => {
    const tree = render(<Heading>hello world</Heading>);

    expect(tree).toBeTruthy();
  });
});
