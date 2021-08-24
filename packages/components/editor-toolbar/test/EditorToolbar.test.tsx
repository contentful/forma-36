import React from 'react';
import { render } from '@testing-library/react';
import { EditorToolbar } from '../src/EditorToolbar';

describe('EditorToolbar', function () {
  it('renders', () => {
    const tree = render(<EditorToolbar>hello world</EditorToolbar>);

    expect(tree).toBeTruthy();
  });
});
