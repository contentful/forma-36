import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import AssetCard from './AssetCard';
import DropdownList from '../../Dropdown/DropdownList';
import DropdownListItem from '../../Dropdown/DropdownListItem';

it('renders the component', () => {
  const output = shallow(
    <AssetCard title="picture of a cat" src="http://placekitten.com/200/300">
      AssetCard
    </AssetCard>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <AssetCard
      className="my-extra-class"
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component in loading state', () => {
  const output = shallow(
    <AssetCard
      isLoading
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with status', () => {
  const output = shallow(
    <AssetCard
      status="archived"
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with actions', () => {
  const output = shallow(
    <AssetCard
      dropdownListElements={
        <DropdownList>
          <DropdownListItem isTitle>Actions</DropdownListItem>
          <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        </DropdownList>
      }
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component without actions', () => {
  const output = shallow(
    <AssetCard src="http://placekitten.com/200/300" title="picture of a cat" />,
  );

  expect(output.find('Dropdown')).toHaveLength(0);
  expect(output).toMatchSnapshot();
});

it('renders the component with a drag handle', () => {
  const output = shallow(
    <AssetCard
      className="my-extra-class"
      src="http://placekitten.com/200/300"
      title="picture of a cat"
      withDragHandle
    />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <AssetCard src="http://placekitten.com/200/300" title="picture of a cat" />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
