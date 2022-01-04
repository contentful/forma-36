import React from 'react';
import { render } from '@testing-library/react';
import { Workbench } from './Workbench';

describe('Workbench', function () {
  it('renders', () => {
    const tree = render(<Workbench>hello world</Workbench>);

    expect(tree).toBeTruthy();
  });
});
