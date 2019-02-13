import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import HelpText from './HelpText';

it('renders the component', () => {
  const output = shallow(<HelpText>Lorem Ipsum dolor sit amet</HelpText>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <HelpText extraClassNames="my-extra-class">
      Lorem Ipsum dolor sit amet
    </HelpText>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<HelpText>Lopem Ipsum dolor sit amet</HelpText>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
