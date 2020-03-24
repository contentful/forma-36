import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Grid from './Grid';

it('renders the component', () => {
  const output = shallow(<Grid>Grid</Grid>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(<Grid className="my-extra-class">Grid</Grid>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Grid>Grid</Grid>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
