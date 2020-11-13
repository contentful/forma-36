/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { render } from '@testing-library/react';

import Portal from './Portal';

it('renders the component', () => {
  const { baseElement } = render(
    <Portal>
      <React.Fragment>👋</React.Fragment>
    </Portal>,
  );

  expect(baseElement).toMatchSnapshot();
});

it('renders the component in a separate container', () => {
  const containerElement = document.createElement('span');
  document.body.appendChild(containerElement);

  const { baseElement } = render(
    <Portal container={containerElement}>
      <React.Fragment>👋</React.Fragment>
    </Portal>,
  );

  expect(baseElement).toMatchSnapshot();
});
