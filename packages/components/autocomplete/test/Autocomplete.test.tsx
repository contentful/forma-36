import React from 'react';
import { render } from '@testing-library/react';
import { Autocomplete } from '../src/Autocomplete';

describe('Autocomplete', function () {
  it('renders', () => {
    const tree = render(<Autocomplete>hello world</Autocomplete>);

    expect(tree).toBeTruthy();
  });
});
