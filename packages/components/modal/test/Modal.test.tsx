import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from '../src/Modal';

describe('Modal', function () {
  it('renders', () => {
    const tree = render(<Modal>hello world</Modal>);

    expect(tree).toBeTruthy();
  });
});
