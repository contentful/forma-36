import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';

import { Portal } from './Portal';

describe('Portal', () => {
  it('renders the component', () => {
    const { getByText } = render(
      <Portal>
        <React.Fragment>👋</React.Fragment>
      </Portal>,
    );

    expect(getByText('👋')).toBeTruthy();
  });

  it('renders the component in a separate container', () => {
    const containerElement = document.createElement('span');
    containerElement.setAttribute('data-test-id', 'test-container');
    document.body.appendChild(containerElement);

    const { getByText, getByTestId } = render(
      <Portal container={containerElement}>
        <React.Fragment>👋</React.Fragment>
      </Portal>,
    );

    expect(getByTestId('test-container')).toContainElement(getByText('👋'));
  });
});
