import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import EntityListItem from './EntityListItem';
import DropdownList from '../../Dropdown/DropdownList';
import DropdownListItem from '../../Dropdown/DropdownListItem';

it('renders the component', () => {
  const output = shallow(
    <EntityListItem title="Title" contentType="Content type" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a description', () => {
  const output = shallow(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a status', () => {
  const output = shallow(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="published"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with dropdownListElements', () => {
  const output = shallow(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="published"
      dropdownListElements={
        <DropdownList>
          <DropdownListItem isTitle>Actions</DropdownListItem>
          <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
          <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
          <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
        </DropdownList>
      }
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with drag handle', () => {
  const output = shallow(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="published"
      withDragHandle
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an active drag handle', () => {
  const output = shallow(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="published"
      withDragHandle
      isDragActive
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as an asset entityType variant', () => {
  const output = shallow(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="published"
      entityType="asset"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as isLoading', () => {
  const output = shallow(
    <EntityListItem title="Title" description="Description" isLoading />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as an `a` element if passed a href prop', () => {
  const output = shallow(
    <EntityListItem title="Title" description="Description" href="#" />,
  );

  expect(output).toMatchSnapshot();
});

it('can call an onClick callback', () => {
  const mockOnClick = jest.fn();

  const output = shallow(
    <EntityListItem
      title="Title"
      description="Description"
      onClick={mockOnClick}
    />,
  );

  output.find('a').simulate('click');
  expect(mockOnClick).toHaveBeenCalled();
  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      className="my-extra-class"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <ul>
      <EntityListItem
        title="Title"
        description="Description"
        contentType="Content type"
      />
    </ul>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
