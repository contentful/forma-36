import React from 'react';
import { shallow } from 'enzyme';
import TableCell from './TableCell';

it('renders the component', () => {
  const output = shallow(<TableCell sorting="asc">Foo</TableCell>);

  expect(output).toMatchSnapshot();
});
