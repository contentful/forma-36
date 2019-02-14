import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import CommandPanel from './CommandPanel';

it('renders the component', () => {
  const output = shallow(<CommandPanel>CommandPanel</CommandPanel>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <CommandPanel extraClassNames="my-extra-class">CommandPanel</CommandPanel>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<CommandPanel>CommandPanel</CommandPanel>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
