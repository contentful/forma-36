import React from 'react';

import { Button } from '@contentful/f36-button';
import { CommonProps, Stack } from '@contentful/f36-core';
import { ChevronLeftIcon, ChevronRightIcon } from '@contentful/f36-icons';

export interface PaginationProps extends CommonProps {
  /**
   * Sets which page is active on the Pagination
   */
  activePage: number;
  /**
   * Sets how many items are displayed per page
   */
  itemsPerPage: number;
  /**
   * Total amount of items the pagination is applied to.
   */
  totalItems: number;
  /**
   * Handler function called when user navigates to another page on the pagination.
   */
  onPageChange: (page: number) => void;
}

export function getPagesRange(
  page: number,
  total: number,
  neighboursCount = 2,
): number[] {
  const PAGINATION_RANGE = neighboursCount * 2;

  if (total <= PAGINATION_RANGE) {
    // Total amount of pages are less than the possible pagination range
    return [...Array(total).keys()];
  }

  const baseRange = [...Array(PAGINATION_RANGE + 1).keys()];

  if (page <= neighboursCount) {
    // Active page is at the start of the pagination page count
    return baseRange;
  }
  if (page > total - neighboursCount) {
    // Active page is at the end of the pagination page count
    return baseRange.map((i) => i + total - PAGINATION_RANGE - 1);
  }
  // Active page is in the middle of the pagination count
  return baseRange.map((i) => i + page - neighboursCount - 1);
}

function _Pagination(props: PaginationProps, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    onPageChange,
    testId = 'cf-ui-pagination',
    activePage: propsActivePage,
    totalItems,
    itemsPerPage,
    ...otherProps
  } = props;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const activePage = Math.max(Math.min(propsActivePage, totalPages), 1);
  const hasOnlyOnePage = totalPages === 1;
  const activePageIsAtPaginationStart = activePage === 1;
  const activePageIsAtPaginationEnd = activePage === totalPages;

  return (
    <Stack
      className={className}
      testId={testId}
      spacing="spacingS"
      ref={ref}
      {...otherProps}
    >
      <Button
        aria-label="To previous page"
        size="small"
        startIcon={<ChevronLeftIcon />}
        variant="transparent"
        isDisabled={hasOnlyOnePage || activePageIsAtPaginationStart}
        onClick={() => onPageChange(activePage - 1)}
      >
        Previous
      </Button>
      <Stack spacing="spacing2Xs">
        {getPagesRange(activePage, totalPages).map((pageIndex) => {
          const page = pageIndex + 1;
          return (
            <Button
              onClick={() => onPageChange(page)}
              size="small"
              variant={page === activePage ? 'secondary' : 'transparent'}
              testId={page === activePage ? 'active' : `inactive-${page}`}
              key={pageIndex}
            >
              {page}
            </Button>
          );
        })}
      </Stack>
      <Button
        variant="transparent"
        size="small"
        endIcon={<ChevronRightIcon />}
        isDisabled={hasOnlyOnePage || activePageIsAtPaginationEnd}
        onClick={() => onPageChange(activePage + 1)}
        aria-label="To next page"
      >
        Next
      </Button>
    </Stack>
  );
}

export const Pagination = React.forwardRef(_Pagination);
