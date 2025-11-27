import React from 'react';

import { Button } from '@contentful/f36-button';
import { Select } from '@contentful/f36-forms';
import { Stack, Flex, type CommonProps } from '@contentful/f36-core';
import { CaretLeftIcon, CaretRightIcon } from '@contentful/f36-icons';
import { Text } from '@contentful/f36-typography';

import { getRangeText } from './utils';

type NavigationButtonsProps = {
  /**
   * Label for the next button
   * @default "Next"
   */
  nextLabel?: string;
  /**
   * Label for the previous button
   * @default "Previous"
   */
  previousLabel?: string;
  /**
   * Aria label for the next button
   * @default "To next page"
   */
  nextAriaLabel?: string;
  /**
   * Aria label for the previous button
   * @default "To previous page"
   */
  previousAriaLabel?: string;
};
export interface BasePaginationProps extends CommonProps {
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
   * Sets if the View per page selector is shown
   * @default false
   */
  showViewPerPage?: boolean;
  /**
   * Label for the View per page selector
   * @default "View"
   */
  viewPerPageLabel?: string;
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
  /**
   * Labels for previous and next buttons
   * @default { labelNext: "Next", labelPrevious: "Previous", ariaLabelNext: "To next page", ariaLabelPrevious: "To previous page" }
   */
  navigationButtonsProps?: NavigationButtonsProps;
}

type WithTotalItemsAndLabelOrNot =
  | {
      /**
       * Total amount of items the pagination is applied to.
       */
      totalItems: number;
      /**
       * Label shown when the `totalItems` is provided.
       * @default `of ${totalItems} items`
       */
      totalItemsLabel?: (totalItems: number) => string;
    }
  | {
      totalItems?: never;
      totalItemsLabel?: never;
    };

export type PaginationProps = BasePaginationProps & WithTotalItemsAndLabelOrNot;

function PaginationBase(props: PaginationProps, ref: React.Ref<HTMLDivElement>) {
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
    viewPerPageLabel = 'View',
    navigationButtonsProps = {
      nextLabel: 'Next',
      previousLabel: 'Previous',
      nextAriaLabel: 'To next page',
      previousAriaLabel: 'To previous page',
    },
    totalItemsLabel = (totalItems: number) => `of ${totalItems} items`,
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
    totalItemsLabel,
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
          <Text as="label" htmlFor="perPageViewSelect" fontColor="gray500">
            {viewPerPageLabel}
          </Text>
          <Select
            id="perPageViewSelect"
            value={`${itemsPerPage}`}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onViewPerPageChange && onViewPerPageChange(+e.target.value)
            }
          >
            {viewPerPageOptions.map((option: number) => (
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
              aria-label={navigationButtonsProps.previousAriaLabel}
              startIcon={<CaretLeftIcon />}
              variant="secondary"
              onClick={() => onPageChange(activePage - 1)}
              testId="cf-ui-pagination-previous"
            >
              {navigationButtonsProps.previousLabel}
            </Button>
          )}
          {!isLastPage && (
            <Button
              aria-label={navigationButtonsProps.nextAriaLabel}
              variant="secondary"
              endIcon={<CaretRightIcon />}
              onClick={() => onPageChange(activePage + 1)}
              testId="cf-ui-pagination-next"
            >
              {navigationButtonsProps.nextLabel}
            </Button>
          )}
        </Stack>
      </Stack>
    </Flex>
  );
}

PaginationBase.displayName = 'Pagination';

export const Pagination = React.forwardRef(PaginationBase);
