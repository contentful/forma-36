import React from 'react';
import { render } from '@testing-library/react';
import { Step } from '.';

describe('Step', function () {
  it('renders', () => {
    // it renders default state with only required props
    // it renders the correct step style (icon vs number)
    // it renders the correct order of variants
    const tree = render(<Step />);

    expect(tree).toBeTruthy();
  });
});
