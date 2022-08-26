import React from 'react';

import { Button } from '@contentful/f36-button';
import { Select } from '@contentful/f36-forms';
import { Stack, Flex, type CommonProps } from '@contentful/f36-core';
import { ChevronLeftIcon, ChevronRightIcon } from '@contentful/f36-icons';
import { Text } from '@contentful/f36-typography';

import { getRangeText } from './utils';

export interface PaginationProps extends CommonProps {
  /**
   * Sets which page is active on the Pagination
   * @default 0
   */
  activePage?: number;
  /**
   * Sets if the user is on the last page of navigation
   * @default false
   */
  isLastPage?: boolean;
  /**
   * Number of items are actually on the page.
   * If no value is set it defaults to viewPerPage value
   * @default 20
   */
  pageLength?: number;
  /**
   * Total amount of items the pagination is applied to.
   */
  totalItems?: number;
  /**
   * Sets if the View per page selector is shown
   * @default false
   */
  showViewPerPage?: boolean;
  /**
   * Sets how many items are displayed per page.
   * Must be one of the values passed on viewPerPageOptions prop.
   * @default 20
   */
  itemsPerPage?: number;
  /**
   * Array of options to show on the View select
   * @default [20, 100]
   */
  viewPerPageOptions?: number[];
  /**
   * Handler function called when user changes the view per page selector.
   */
  onViewPerPageChange?: (items: number) => void;
  /**
   * Handler function called when user navigates to another page on the pagination.
   */
  onPageChange: (page: number) => void;
}

function _Pagination(props: PaginationProps, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    onPageChange,
    testId = 'cf-ui-pagination',
    activePage: propsActivePage,
    itemsPerPage = 20,
    pageLength,
    isLastPage: propsLastPage = false,
    activePage = 0,
    viewPerPageOptions = [20, 100],
    showViewPerPage = false,
    totalItems,
    onViewPerPageChange,
    ...otherProps
  } = props;
  const isFirstPage = activePage === 0;
  const isLastPage =
    propsLastPage ||
    (totalItems && (activePage + 1) * itemsPerPage >= totalItems);
  const totalText = getRangeText({
    totalItems,
    activePage,
    itemsPerPage,
    pageLength,
    isLastPage,
  });

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      fullWidth
      className={className}
      testId={testId}
      ref={ref}
      {...otherProps}
    >
      {showViewPerPage && (
        <Stack>
          <Text fontColor="gray500">View</Text>
          <Select
            value={`${itemsPerPage}`}
            onChange={(e) =>
              onViewPerPageChange && onViewPerPageChange(+e.target.value)
            }
          >
            {viewPerPageOptions.map((option) => (
              <Select.Option key={option} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
        </Stack>
      )}
      <Stack flexGrow={1} justifyContent="flex-end">
        <Text fontColor="gray500">{totalText}</Text>
        <Stack spacing="spacingS">
          {!isFirstPage && (
            <Button
              aria-label="To previous page"
              startIcon={<ChevronLeftIcon />}
              variant="secondary"
              onClick={() => onPageChange(activePage - 1)}
              testId="cf-ui-pagination-previous"
            >
              Previous
            </Button>
          )}
          {!isLastPage && (
            <Button
              aria-label="To next page"
              variant="secondary"
              endIcon={<ChevronRightIcon />}
              onClick={() => onPageChange(activePage + 1)}
              testId="cf-ui-pagination-next"
            >
              Next
            </Button>
          )}
        </Stack>
      </Stack>
    </Flex>
  );
}

_Pagination.displayName = 'Pagination';

export const Pagination = React.forwardRef(_Pagination);
