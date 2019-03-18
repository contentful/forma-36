import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Tag from './Tag';

it('renders the component', () => {
  const output = shallow(<Tag>Tag</Tag>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(<Tag className="my-extra-class">Tag</Tag>);

  expect(output).toMatchSnapshot();
});

it('renders a "primary" Tag', () => {
  const output = shallow(<Tag tagType="primary">Tag</Tag>);

  expect(output).toMatchSnapshot();
});

it('renders a "positive" Tag', () => {
  const output = shallow(<Tag tagType="positive">Tag</Tag>);

  expect(output).toMatchSnapshot();
});

it('renders a "negative" Tag', () => {
  const output = shallow(<Tag tagType="negative">Tag</Tag>);

  expect(output).toMatchSnapshot();
});

it('renders a "warning" Tag', () => {
  const output = shallow(<Tag tagType="warning">Tag</Tag>);

  expect(output).toMatchSnapshot();
});

it('renders a "secondary" Tag', () => {
  const output = shallow(<Tag tagType="secondary">Tag</Tag>);

  expect(output).toMatchSnapshot();
});

it('renders a "muted" Tag', () => {
  const output = shallow(<Tag tagType="muted">Tag</Tag>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Tag>Tag</Tag>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
