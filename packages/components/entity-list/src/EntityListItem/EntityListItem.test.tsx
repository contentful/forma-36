import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from '@/scripts/test/axeHelper';

import { EntityListItem } from '..';
import { MenuItem, MenuSectionTitle } from '@contentful/f36-menu';
import { DragHandle } from '@contentful/f36-drag-handle';

const ITEM_TEST_ID = 'list-item';

describe('EntityList', function () {
  it('renders with title', () => {
    const { getByTestId } = render(
      <EntityListItem testId={ITEM_TEST_ID} title="Title" />,
    );

    expect(getByTestId(ITEM_TEST_ID)).toHaveTextContent('Title');
  });

  it('renders the component with a description', () => {
    const { getByTestId } = render(
      <EntityListItem
        title="Title"
        testId={ITEM_TEST_ID}
        description="Description"
      />,
    );

    expect(getByTestId(ITEM_TEST_ID)).toHaveTextContent('Description');
  });

  it('renders the component with a status', () => {
    const { getByTestId } = render(
      <EntityListItem testId={ITEM_TEST_ID} title="Title" status="published" />,
    );

    expect(getByTestId(ITEM_TEST_ID)).toHaveTextContent('published');
  });

  it('renders the component with Menu', () => {
    const { getByRole, getAllByRole, getByLabelText } = render(
      <EntityListItem
        title="Title"
        actions={[
          <MenuSectionTitle key="title">Actions</MenuSectionTitle>,
          <MenuItem key="edit">Edit</MenuItem>,
          <MenuItem key="download">Download</MenuItem>,
          <MenuItem key="remove">Remove</MenuItem>,
        ]}
      />,
    );

    userEvent.click(getByLabelText('Actions'));

    expect(getByRole('menu')).toBeInTheDocument();
    expect(getAllByRole('menuitem')).toHaveLength(3);
  });

  it('renders the component with custom drag handle', () => {
    const { getByText } = render(
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

    expect(getByText('Reorder card')).toBeInTheDocument();
  });

  it('renders the component with a drag handle', () => {
    const { getByText } = render(
      <EntityListItem title="Title" withDragHandle />,
    );

    expect(getByText('Reorder entry')).toBeInTheDocument();
  });

  it('renders the component as an asset thumbnail preview', () => {
    const { getByRole } = render(
      <EntityListItem
        title="Title"
        thumbnailUrl="https://path/to/thumbnail.jpg"
        thumbnailAltText="thumbnail alt text"
      />,
    );

    const img = getByRole('img');

    expect(img).toHaveAttribute('src', 'https://path/to/thumbnail.jpg');
    expect(img).toHaveAttribute('alt', 'thumbnail alt text');
  });

  it('renders the component without thumbnai if status is archived', () => {
    const { queryByAltText } = render(
      <EntityListItem
        title="Title"
        status="archived"
        thumbnailUrl="https://path/to/thumbnail.jpg"
        thumbnailAltText="thumbnail alt text"
      />,
    );

    expect(queryByAltText('thumbnail alt text')).toBeFalsy();
  });

  it('renders the component as isLoading', () => {
    const { getByLabelText } = render(
      <EntityListItem title="Title" isLoading />,
    );

    expect(getByLabelText('Loading component...')).toBeInTheDocument();
  });

  it('renders the component as an `a` element if passed a href prop', () => {
    const { container, debug } = render(
      <EntityListItem
        title="Title"
        description="Description"
        href="#test-href"
      />,
    );
    debug();
    expect(container.querySelector('a')).toHaveAttribute('href', '#test-href');
  });

  it('can call an onClick callback', () => {
    const mockOnClick = jest.fn();

    const { getByText } = render(
      <EntityListItem title="Title" onClick={mockOnClick} />,
    );

    userEvent.click(getByText('Title'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('renders the component with an additional class name', () => {
    const { getByTestId } = render(
      <EntityListItem
        title="Title"
        className="my-extra-class"
        testId={ITEM_TEST_ID}
      />,
    );

    expect(getByTestId(ITEM_TEST_ID)).toHaveClass('my-extra-class');
  });

  it('renders the component with disabled actions', () => {
    const { getByLabelText } = render(
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

    expect(getByLabelText('Actions')).toBeDisabled();
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
