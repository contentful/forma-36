import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { axe } from '../../../utils/axeHelper';
import { EntityListItem } from './EntityListItem';
import { DropdownList, DropdownListItem } from '../../Dropdown';
import { CardDragHandle } from './../../Card';

it('renders the component', () => {
  const { container } = render(
    <EntityListItem title="Title" contentType="Content type" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a description', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a status', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="published"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as an Asset with a title-cased entityType', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      entityType="Asset"
      status="published"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as an Asset with a lower-cased entityType', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      entityType="asset"
      status="published"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with dropdownListElements', () => {
  Date.now = jest.fn(() => 123456);
  Math.random = jest.fn(() => 500);

  const { container } = render(
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

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with custom drag handle', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="published"
      cardDragHandleComponent={<CardDragHandle>Reorder card</CardDragHandle>}
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with a drag handle', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="published"
      withDragHandle
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with active drag state', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="published"
      isDragActive
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as an asset entityType variant', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="published"
      entityType="asset"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as an asset thumbnail preview', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="published"
      thumbnailUrl="https://path/to/thumbnail.jpg"
      thumbnailAltText="Something clever"
      entityType="asset"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as an asset entityType icon with an archived status', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      status="archived"
      thumbnailUrl="https://path/to/thumbnail.jpg"
      thumbnailAltText="Something clever"
      entityType="asset"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as isLoading', () => {
  const { container } = render(
    <EntityListItem title="Title" description="Description" isLoading />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as an `a` element if passed a href prop', () => {
  const { container } = render(
    <EntityListItem title="Title" description="Description" href="#" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('can call an onClick callback', () => {
  const mockOnClick = jest.fn();

  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      onClick={mockOnClick}
    />,
  );

  userEvent.click(screen.getByText('Title'));
  expect(mockOnClick).toHaveBeenCalled();
  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      className="my-extra-class"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with disabled actions', () => {
  const { container } = render(
    <EntityListItem
      title="Title"
      description="Description"
      contentType="Content type"
      className="my-extra-class"
      isActionsDisabled
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <ul>
      <EntityListItem
        title="Title"
        description="Description"
        contentType="Content type"
      />
    </ul>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
