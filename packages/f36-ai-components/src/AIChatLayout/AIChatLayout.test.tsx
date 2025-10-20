import React from 'react';
import { render } from '@testing-library/react';
import { AIChatLayout } from './AIChatLayout';

describe('AIChatLayout', function () {
  it('renders', () => {
    const tree = render(<AIChatLayout>hello world</AIChatLayout>);

    expect(tree).toBeTruthy();
  });
});
