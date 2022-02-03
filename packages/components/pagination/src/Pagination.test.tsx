import React from 'react';

import { render, cleanup } from '@testing-library/react';

import { getPagesRange, PaginationProps, Pagination } from './Pagination';
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

  describe('getPagesRange', () => {
    const NEIGHBOURS_COUNT = 2;
    describe('when the total pages are less than double the amount of renderable neighbouring buttons', () => {
      it('should return a range of 0 to total pages', () => {
        expect(getPagesRange(2, 4, NEIGHBOURS_COUNT)).toEqual([0, 1, 2, 3]);
      });
    });

    describe('when the total pages are more than double the amount of renderable neighbouring buttons', () => {
      describe('and the active page is somewhere at the start of the total pages', () => {
        it('should return a range of 0 to the max amount of visible paginator buttons', () => {
          expect(getPagesRange(2, 30, NEIGHBOURS_COUNT)).toEqual([
            0,
            1,
            2,
            3,
            4,
          ]);
        });
      });
      describe('and the active page is near the end of the total pages', () => {
        it('should return a range of the last renderable paginator buttons up to the amount of total pages', () => {
          expect(getPagesRange(28, 30, NEIGHBOURS_COUNT)).toEqual([
            25,
            26,
            27,
            28,
            29,
          ]);
        });
      });
      describe('and the active page is anywhere in the middle of the total pages', () => {
        it('should return a range of active pages -/+ neighours count', () => {
          expect(getPagesRange(15, 30, NEIGHBOURS_COUNT)).toEqual([
            12,
            13,
            14,
            15,
            16,
          ]);
        });
      });
    });
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
