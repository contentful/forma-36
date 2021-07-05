import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../src/Button';

describe('Button', function () {
  it('renders', () => {
    const tree = render(<Button>hello world</Button>);

    expect(tree).toBeTruthy();
  });
});
