import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../../utils/axeHelper';
import AssetCard from './AssetCard';
import DropdownList from '../../Dropdown/DropdownList';
import DropdownListItem from '../../Dropdown/DropdownListItem';
import CardDragHandle from './../CardDragHandle';

it('renders the component', () => {
  const { container } = render(
    <AssetCard title="picture of a cat" src="http://placekitten.com/200/300">
      AssetCard
    </AssetCard>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <AssetCard
      className="my-extra-class"
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component in loading state', () => {
  const { container } = render(
    <AssetCard
      isLoading
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with status', () => {
  const { container } = render(
    <AssetCard
      status="archived"
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with actions', () => {
  const { container } = render(
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

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component without actions', () => {
  const { container } = render(
    <AssetCard src="http://placekitten.com/200/300" title="picture of a cat" />,
  );
  const dropdown = container.querySelector('[data-test-id="cf-ui-dropdown"]');

  expect(dropdown).not.toBeTruthy();
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a drag handle', () => {
  const { container } = render(
    <AssetCard
      className="my-extra-class"
      src="http://placekitten.com/200/300"
      title="picture of a cat"
      withDragHandle
    />,
  );

  expect(container).toMatchSnapshot();
});

it('renders the component with a custom drag handle', () => {
  const { container } = render(
    <AssetCard
      className="my-extra-class"
      src="http://placekitten.com/200/300"
      title="picture of a cat"
      cardDragHandleComponent={<CardDragHandle>Reorder card</CardDragHandle>}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a small variant of the component', () => {
  const { container } = render(
    <AssetCard
      size="small"
      src="http://placekitten.com/200/300"
      title="picture of a cat"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <AssetCard src="http://placekitten.com/200/300" title="picture of a cat" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
