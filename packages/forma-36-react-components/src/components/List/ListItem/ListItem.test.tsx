import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

it('renders the component', () => {
  const output = shallow(<ListItem>ListItem</ListItem>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <ListItem extraClassNames="my-extra-class">ListItem</ListItem>,
  );

  expect(output).toMatchSnapshot();
});
