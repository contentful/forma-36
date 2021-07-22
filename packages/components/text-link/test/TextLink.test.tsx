import React from 'react';
import { render } from '@testing-library/react';
import { TextLink } from '../src/TextLink';

describe('TextLink', function () {
  it('renders', () => {
    const tree = render(<TextLink>hello world</TextLink>);

    expect(tree).toBeTruthy();
  });
});
