import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DropdownListItem } from './DropdownListItem';

it('renders the component', () => {
  const { container } = render(
    <DropdownListItem>DropdownMenuItem</DropdownListItem>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <DropdownListItem className="my-extra-class">Entry</DropdownListItem>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as active', () => {
  const { container } = render(
    <DropdownListItem isActive>entry</DropdownListItem>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component as disabled', () => {
  const { container } = render(
    <DropdownListItem isDisabled>entry</DropdownListItem>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('calls onClick', () => {
  const mockOnClick = jest.fn();
  render(<DropdownListItem onClick={mockOnClick}>entry</DropdownListItem>);

  userEvent.click(screen.getByText('entry'));
  expect(mockOnClick).toHaveBeenCalled();
});

it('does not call onClick on a disabled menu item', () => {
  const mockOnClick = jest.fn();
  render(
    <DropdownListItem isDisabled onClick={mockOnClick}>
      entry
    </DropdownListItem>,
  );

  const button = screen.getByText('entry');
  userEvent.click(button);
  expect(mockOnClick).not.toHaveBeenCalled();
});

it('renders the component with a href', () => {
  const { container } = render(
    <DropdownListItem href="#">DropdownListItem with a href</DropdownListItem>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
