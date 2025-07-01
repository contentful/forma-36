import React from 'react';
import { render } from '@testing-library/react';
import { UsageCard } from './UsageCard';

describe('UsageCard', function () {
  it('renders', () => {
    const tree = render(<UsageCard>hello world</UsageCard>);

    expect(tree).toBeTruthy();
  });
});
