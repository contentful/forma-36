import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import CardActions from './CardActions';
import DropdownListItem from '../../Dropdown/DropdownListItem';
import DropdownList from '../../Dropdown/DropdownList';

it('renders the component using a single dropdown list', () => {
  const output = shallow(
    <CardActions>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
    </CardActions>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as disabled', () => {
  const output = shallow(
    <CardActions isDisabled>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
      </DropdownList>
    </CardActions>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component using a multiple dropdown lists', () => {
  const output = shallow(
    <CardActions>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
    </CardActions>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <CardActions className="my-extra-class">
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
    </CardActions>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with published status', () => {
  const output = shallow(
    <CardActions>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
    </CardActions>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues using a single dropdown list', async () => {
  const output = mount(
    <CardActions>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
    </CardActions>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

it('has no a11y issues using multiple dropdown lists', async () => {
  const output = mount(
    <CardActions>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
    </CardActions>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
