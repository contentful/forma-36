import React from 'react';
import { render } from '@testing-library/react';
import { ButtonGroup } from '../src/ButtonGroup';

describe('ButtonGroup', function () {
  it('renders', () => {
    const tree = render(<ButtonGroup>hello world</ButtonGroup>);

    expect(tree).toBeTruthy();
  });
});
