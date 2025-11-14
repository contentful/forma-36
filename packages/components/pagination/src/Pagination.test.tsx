import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Pagination } from './Pagination';

const handlePageChange = jest.fn();
const handleViewPerPageChange = jest.fn();

describe('Pagination', () => {
  beforeEach(() => {
    handlePageChange.mockClear();
    handleViewPerPageChange.mockClear();
  });

  it('renders with default test id', () => {
    const { container } = render(
      <Pagination activePage={0} onPageChange={handlePageChange} />,
    );
    expect(
      container.querySelector('[data-test-id="cf-ui-pagination"]').nodeName,
    ).toBeTruthy();
  });

  it('shows only next button on first page (no totalItems prop)', () => {
    render(<Pagination activePage={0} onPageChange={handlePageChange} />);
    expect(
      screen.queryByTestId('cf-ui-pagination-previous'),
    ).not.toBeInTheDocument();
    expect(screen.getByTestId('cf-ui-pagination-next')).toBeInTheDocument();
  });

  it('calls onPageChange with next page when next button clicked', async () => {
    const user = userEvent.setup();
    render(<Pagination activePage={0} onPageChange={handlePageChange} />);
    await user.click(screen.getByTestId('cf-ui-pagination-next'));
    expect(handlePageChange).toHaveBeenCalledWith(1);
  });

  it('shows only previous button on last page (derived from totalItems)', () => {
    render(
      <Pagination
        activePage={1}
        itemsPerPage={20}
        totalItems={40}
        onPageChange={handlePageChange}
      />,
    );
    expect(screen.getByTestId('cf-ui-pagination-previous')).toBeInTheDocument();
    expect(
      screen.queryByTestId('cf-ui-pagination-next'),
    ).not.toBeInTheDocument();
  });

  it('calls onPageChange with previous page when previous button clicked', async () => {
    const user = userEvent.setup();
    render(
      <Pagination
        activePage={1}
        itemsPerPage={20}
        totalItems={60}
        onPageChange={handlePageChange}
      />,
    );
    await user.click(screen.getByTestId('cf-ui-pagination-previous'));
    expect(handlePageChange).toHaveBeenCalledWith(0);
  });

  it('renders range text without totalItems', () => {
    render(
      <Pagination
        activePage={2}
        // 0-based page index, itemsPerPage default 20 -> range 41 - 60
        onPageChange={handlePageChange}
      />,
    );
    expect(screen.getByText('41 - 60')).toBeInTheDocument();
  });

  it('renders range text with totalItems when middle page', () => {
    render(
      <Pagination
        activePage={1}
        itemsPerPage={20}
        totalItems={55}
        onPageChange={handlePageChange}
      />,
    );
    // page 1 (second page) => items 21 - 40 of 55 items
    expect(screen.getByText('21 - 40 of 55 items')).toBeInTheDocument();
  });

  it('renders custom range text with totalItems', () => {
    render(
      <Pagination
        activePage={1}
        itemsPerPage={20}
        totalItems={55}
        totalItemsLabel={(totalItems) => `von ${totalItems} Artikeln`}
        onPageChange={handlePageChange}
      />,
    );
    expect(screen.getByText('21 - 40 von 55 Artikeln')).toBeInTheDocument();
  });

  it('renders correct last page truncated range when derived last page', () => {
    render(
      <Pagination
        activePage={2}
        itemsPerPage={20}
        totalItems={55}
        onPageChange={handlePageChange}
      />,
    );
    // last page -> items 41 - 55 of 55 items
    expect(screen.getByText('41 - 55 of 55 items')).toBeInTheDocument();
  });

  it('respects explicit pageLength on last page (isLastPage true)', () => {
    render(
      <Pagination
        activePage={3}
        // Pretend manual pagination (no totalItems) but last page shorter
        pageLength={5}
        itemsPerPage={20}
        isLastPage
        onPageChange={handlePageChange}
      />,
    );
    // first item = 61, pageLength=5 -> 61 - 65
    expect(screen.getByText('61 - 65')).toBeInTheDocument();
  });

  it('shows and allows changing items per page when showViewPerPage is true', async () => {
    const user = userEvent.setup();
    render(
      <Pagination
        activePage={0}
        itemsPerPage={20}
        onPageChange={handlePageChange}
        showViewPerPage
        viewPerPageOptions={[20, 40]}
        onViewPerPageChange={handleViewPerPageChange}
      />,
    );
    // select has test id from Select component
    const select = screen.getByTestId('cf-ui-select') as HTMLSelectElement;
    expect(select.value).toBe('20');
    await user.selectOptions(select, ['40']);
    expect(handleViewPerPageChange).toHaveBeenCalledWith(40);
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Pagination
        activePage={0}
        onPageChange={handlePageChange}
        onViewPerPageChange={handleViewPerPageChange}
        itemsPerPage={40}
        totalItems={200}
        showViewPerPage
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
