import React, { useEffect, useState } from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { Pagination } from '../src/Pagination';
import type { PaginationProps } from '../src/Pagination';

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta;

export const Default = (args: PaginationProps) => {
  const { activePage, onPageChange, ...otherProps } = args;
  const [page, setPage] = useState(activePage);
  useEffect(() => {
    setPage(activePage);
  }, [activePage]);

  const handlePageChange = (p) => {
    onPageChange && onPageChange(p);
    setPage(p);
  };

  return (
    <Pagination
      activePage={page}
      onPageChange={handlePageChange}
      {...otherProps}
    />
  );
};

Default.args = {
  activePage: 1,
  totalItems: 120,
  itemsPerPage: 10,
};
