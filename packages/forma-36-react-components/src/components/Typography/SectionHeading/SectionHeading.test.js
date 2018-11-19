import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import SectionHeading from './SectionHeading';

it('renders the component', () => {
  const output = shallow(<SectionHeading>SectionHeading</SectionHeading>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <SectionHeading extraClassNames="my-extra-class">
      SectionHeading
    </SectionHeading>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component h3', () => {
  const output = shallow(
    <SectionHeading element="h3">SectionHeading</SectionHeading>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<SectionHeading>SectionHeading</SectionHeading>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
