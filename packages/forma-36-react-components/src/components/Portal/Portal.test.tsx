/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { shallow } from 'enzyme';

import Portal from './Portal';

it('renders the component', () => {
  const output = shallow(
    <Portal>
      <React.Fragment>👋</React.Fragment>
    </Portal>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component in a separate container', () => {
  const container = document.createElement('span');
  document.body.appendChild(container);

  const output = shallow(
    <Portal container={container}>
      <React.Fragment>👋</React.Fragment>
    </Portal>,
  );
  expect(output).toMatchSnapshot();
});
