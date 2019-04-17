import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import EntityList from './EntityList';
import EntityListItem from './../EntityListItem';

it('renders the component', () => {
  const output = shallow(<EntityList />);

  expect(output).toMatchSnapshot();
});

it('renders the component with EntityListItems as children', () => {
  const output = shallow(
    <EntityList>
      <EntityListItem
        title="Entry 1"
        description="Description 1"
        contentType="My content type"
      />
      <EntityListItem
        title="Entry 2"
        description="Description 2"
        contentType="My content type"
      />
      <EntityListItem
        title="Entry 3"
        description="Description 2"
        contentType="My content type"
      />
    </EntityList>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(<EntityList className="my-extra-class" />);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<EntityList />).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

it('has no a11y issues with children', async () => {
  const output = mount(
    <EntityList>
      <EntityListItem
        title="Entry 1"
        description="Description 1"
        contentType="My content type"
      />
      <EntityListItem
        title="Entry 2"
        description="Description 2"
        contentType="My content type"
      />
      <EntityListItem
        title="Entry 3"
        description="Description 2"
        contentType="My content type"
      />
    </EntityList>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
