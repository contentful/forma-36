import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../../utils/axeHelper';
import { CardActions } from './CardActions';
import { DropdownList, DropdownListItem } from '../../Dropdown';

beforeAll(() => {
  Date.now = jest.fn(() => 123456);
  Math.random = jest.fn(() => 500);
});

it('renders the component using a single dropdown list', () => {
  const { container } = render(
    <CardActions>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
    </CardActions>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as disabled', () => {
  const { container } = render(
    <CardActions isDisabled>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
      </DropdownList>
    </CardActions>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component using a multiple dropdown lists', () => {
  const { container } = render(
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

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <CardActions className="my-extra-class">
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
    </CardActions>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with published status', () => {
  const { container } = render(
    <CardActions>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
    </CardActions>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues using a single dropdown list', async () => {
  const { container } = render(
    <CardActions>
      <DropdownList>
        <DropdownListItem onClick={() => {}}>Edit</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Download</DropdownListItem>
        <DropdownListItem onClick={() => {}}>Remove</DropdownListItem>
      </DropdownList>
    </CardActions>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('has no a11y issues using multiple dropdown lists', async () => {
  const { container } = render(
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
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
