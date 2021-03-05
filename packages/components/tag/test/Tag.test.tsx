import React from 'react';
import { render } from '@testing-library/react';
import { Tag } from '../src/Tag';

describe('Tag', function () {
  it('renders', () => {
    const tree = render(<Tag>hello world</Tag>);

    expect(tree).toBeTruthy();
  });
});
