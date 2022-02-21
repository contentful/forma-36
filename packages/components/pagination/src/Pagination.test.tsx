import React from 'react';

import { render, cleanup } from '@testing-library/react';

import { PaginationProps, Pagination } from './Pagination';
import { getExpectedItemsOfActivePage } from './utils';

const defaultProps: PaginationProps = {
  activePage: 3,
  itemsPerPage: 10,
  totalItems: 120,
  onPageChange: jest.fn(),
};

const renderComponent = (props: PaginationProps) => {
  return render(<Pagination {...props} />);
};

describe('Pagination', () => {
  afterEach(cleanup);

  it('renders the last page if active page index is larger than the total count of pages', () => {
    const component = renderComponent({ ...defaultProps, activePage: 14 });
    const button = component.getByTestId('active');
    expect(button.textContent).toEqual('12');
  });

  it('renders the first page if active page index is <= 0', () => {
    const component = renderComponent({ ...defaultProps, activePage: 0 });
    const button = component.getByTestId('active');
    expect(button.textContent).toEqual('1');
  });

  describe('getExpectedItemsOfActivePage', () => {
    describe('When active page is different than last page', () => {
      it('should return the items per page value', () => {
        expect(getExpectedItemsOfActivePage(1, 99, 10)).toEqual(10);
        expect(getExpectedItemsOfActivePage(5, 99, 10)).toEqual(10);
        expect(getExpectedItemsOfActivePage(9, 99, 10)).toEqual(10);
      });
    });

    describe('When active page is equal than last page', () => {
      it('should return the items per page value if the page is full', () => {
        expect(getExpectedItemsOfActivePage(10, 100, 10)).toEqual(10);
        expect(getExpectedItemsOfActivePage(9, 9, 1)).toEqual(1);
        expect(getExpectedItemsOfActivePage(50, 500, 10)).toEqual(10);
      });
      it('should return the rest of totalItems/itemsPerPage', () => {
        expect(getExpectedItemsOfActivePage(10, 99, 10)).toEqual(9);
        expect(getExpectedItemsOfActivePage(5, 9, 2)).toEqual(1);
        expect(getExpectedItemsOfActivePage(17, 130, 8)).toEqual(2);
      });
    });
  });
});
