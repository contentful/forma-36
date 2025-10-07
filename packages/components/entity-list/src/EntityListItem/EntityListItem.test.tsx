/* eslint-disable jest/no-disabled-tests */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { EntityListItem } from '..';
import { MenuItem, MenuSectionTitle } from '@contentful/f36-menu';
import { DragHandle } from '@contentful/f36-drag-handle';

const ITEM_TEST_ID = 'list-item';

describe('EntityList', function () {
  it('renders with title', () => {
    render(<EntityListItem testId={ITEM_TEST_ID} title="Title" />);

    expect(screen.getByTestId(ITEM_TEST_ID)).toHaveTextContent('Title');
  });

  it('renders the component with a description', () => {
    render(
      <EntityListItem
        title="Title"
        testId={ITEM_TEST_ID}
        description="Description"
      />,
    );

    expect(screen.getByTestId(ITEM_TEST_ID)).toHaveTextContent('Description');
  });

  it('renders the component with a status', () => {
    render(
      <EntityListItem testId={ITEM_TEST_ID} title="Title" status="published" />,
    );

    expect(screen.getByTestId(ITEM_TEST_ID)).toHaveTextContent('published');
  });

  it('renders the component with Menu', async () => {
    const editSpy = jest.fn();

    const user = userEvent.setup();
    render(
      <EntityListItem
        title="Title"
        actions={[
          <MenuSectionTitle key="title">Actions</MenuSectionTitle>,
          <MenuItem key="edit" onClick={editSpy}>
            Edit
          </MenuItem>,
          <MenuItem key="download">Download</MenuItem>,
          <MenuItem key="remove">Remove</MenuItem>,
        ]}
      />,
    );

    await user.click(screen.getByLabelText('Actions'));
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getAllByRole('menuitem')).toHaveLength(3);
    await user.click(screen.getByText('Edit'));

    expect(editSpy).toHaveBeenCalled();
  });

  it('renders the component with custom drag handle', () => {
    render(
      <EntityListItem
        title="Title"
        description="Description"
        contentType="Content type"
        status="published"
        cardDragHandleComponent={
          <DragHandle label="Reorder card">Reorder card</DragHandle>
        }
      />,
    );

    expect(screen.getByText('Reorder card')).toBeInTheDocument();
  });

  it('renders the component with a drag handle', () => {
    render(<EntityListItem title="Title" withDragHandle />);

    expect(screen.getByText('Reorder entry')).toBeInTheDocument();
  });

  it('renders the component as an asset thumbnail preview', () => {
    render(
      <EntityListItem
        title="Title"
        thumbnailUrl="https://path/to/thumbnail.jpg"
        thumbnailAltText="thumbnail alt text"
      />,
    );

    const img = screen.getByRole('img');

    expect(img).toHaveAttribute('src', 'https://path/to/thumbnail.jpg');
    expect(img).toHaveAttribute('alt', 'thumbnail alt text');
  });

  it('renders the component without thumbnai if status is archived', () => {
    render(
      <EntityListItem
        title="Title"
        status="archived"
        thumbnailUrl="https://path/to/thumbnail.jpg"
        thumbnailAltText="thumbnail alt text"
      />,
    );

    expect(screen.queryByAltText('thumbnail alt text')).toBeFalsy();
  });

  it('renders the component as isLoading', () => {
    render(<EntityListItem title="Title" isLoading />);

    expect(screen.getByLabelText('Loading component...')).toBeInTheDocument();
  });

  it('renders the component as an `a` element if passed a href prop', () => {
    const { container } = render(
      <EntityListItem
        title="Title"
        description="Description"
        href="#test-href"
      />,
    );

    expect(container.querySelector('a')).toHaveAttribute('href', '#test-href');
  });

  it('can call an onClick callback', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();

    render(<EntityListItem title="Title" onClick={mockOnClick} />);

    await user.click(screen.getByText('Title'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('renders the component with an additional class name', () => {
    render(
      <EntityListItem
        title="Title"
        className="my-extra-class"
        testId={ITEM_TEST_ID}
      />,
    );

    expect(screen.getByTestId(ITEM_TEST_ID)).toHaveClass('my-extra-class');
  });

  it('renders the component with disabled actions', () => {
    render(
      <EntityListItem
        title="Title"
        actions={[
          <MenuItem key="edit">Edit</MenuItem>,
          <MenuItem key="download">Download</MenuItem>,
          <MenuItem key="remove">Remove</MenuItem>,
        ]}
        isActionsDisabled
      />,
    );

    expect(screen.getByLabelText('Actions')).toBeDisabled();
  });

  // issue with testids on icons as icons
  it('renders an "Experience" entity type', () => {
    render(
      <EntityListItem
        title="Premier Studio Experience"
        entityType="Experience"
      />,
    );
    expect(screen.getByTestId('thumbnail-icon-experience')).toBeInTheDocument();
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
});
