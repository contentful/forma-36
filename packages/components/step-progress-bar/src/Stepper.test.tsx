import React from 'react';
import { render } from '@testing-library/react';
import { Stepper } from './Stepper';

describe('Stepper', function () {
  it('renders', () => {
    const tree = render(<Stepper>hello world</Stepper>);

    expect(tree).toBeTruthy();
  });
});