import React from 'react';
import { render } from '@testing-library/react';
import { Polymorphic } from '../src/Polymorphic';

describe('Polymorphic', function () {
  it('renders', () => {
    const tree = render(<Polymorphic>hello world</Polymorphic>);

    expect(tree).toBeTruthy();
  });
});
