import React from 'react';
import { render } from '@testing-library/react';
import { Datepicker } from './Datepicker';

describe('Datepicker', function () {
  it('renders', () => {
    const tree = render(<Datepicker>hello world</Datepicker>);

    expect(tree).toBeTruthy();
  });
});
