import React from 'react';
import { mount } from 'enzyme';
import { axe } from 'jest-axe';
import Paragraph from './Paragraph';

it('renders the component', () => {
  const output = mount(<Paragraph>Paragraph</Paragraph>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = mount(
    <Paragraph className="my-extra-class">Paragraph</Paragraph>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component h3', () => {
  const output = mount(<Paragraph element="h3">Paragraph</Paragraph>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Paragraph>Paragraph</Paragraph>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
