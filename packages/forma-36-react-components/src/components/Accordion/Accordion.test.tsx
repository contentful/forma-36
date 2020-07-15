import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import Accordion from './Accordion';

it('renders the component', () => {
  const output = shallow(<Accordion>Accordion</Accordion>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Accordion className="my-extra-class">Accordion</Accordion>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Accordion>Accordion</Accordion>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
