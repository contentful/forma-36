import React from 'react';
import { render } from '@testing-library/react';
import { UsageCount } from './UsageCount';

describe('UsageCount', function () {
  it('renders', () => {
    const tree = render(<UsageCount>hello world</UsageCount>);

    expect(tree).toBeTruthy();
  });
});
