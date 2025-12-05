import React, { useEffect, useState } from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { Pagination, type PaginationProps } from '../src/Pagination';

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta;

export const Default = (args: PaginationProps) => {
  const {
    activePage,
    onPageChange,
    itemsPerPage,
    onViewPerPageChange,
    ...otherProps
  } = args;
  const [page, setPage] = useState(activePage);
  const [view, setView] = useState(itemsPerPage);
  useEffect(() => {
    setPage(activePage);
    setView(itemsPerPage);
  }, [activePage, itemsPerPage]);

  const handlePageChange = (p) => {
    onPageChange && onPageChange(p);
    setPage(p);
  };

  const handleViewPerPageChange = (i) => {
    onViewPerPageChange && onViewPerPageChange(i);
    setPage(Math.floor((view * page + 1) / i));
    setView(i);
  };

  return (
    <div style={{ width: '920px' }}>
      <Pagination
        activePage={page}
        onPageChange={handlePageChange}
        onViewPerPageChange={handleViewPerPageChange}
        itemsPerPage={view}
        {...otherProps}
      />
    </div>
  );
};

Default.args = {
  activePage: 0,
  itemsPerPage: 50,
  viewPerPageOptions: [20, 50, 100],
};

export const CustomLabels = (args: PaginationProps) => {
  const {
    activePage,
    onPageChange,
    itemsPerPage,
    onViewPerPageChange,
    ...otherProps
  } = args;
  const [page, setPage] = useState(activePage);
  const [view, setView] = useState(itemsPerPage);
  useEffect(() => {
    setPage(activePage);
    setView(itemsPerPage);
  }, [activePage, itemsPerPage]);

  const handlePageChange = (p) => {
    onPageChange && onPageChange(p);
    setPage(p);
  };

  const handleViewPerPageChange = (i) => {
    onViewPerPageChange && onViewPerPageChange(i);
    setPage(Math.floor((view * page + 1) / i));
    setView(i);
  };

  return (
    <div style={{ width: '920px' }}>
      <Pagination
        showViewPerPage
        viewPerPageLabel="Einträge pro Seite"
        navigationButtonsProps={{
          nextLabel: 'Nächste',
          previousLabel: 'Vorherige',
          nextAriaLabel: 'Springe zur nächsten Seite',
          previousAriaLabel: 'Gehe zur vorherigen Seite',
        }}
        activePage={page}
        onPageChange={handlePageChange}
        onViewPerPageChange={handleViewPerPageChange}
        itemsPerPage={view}
        totalItems={55}
        totalItemsLabel={(totalItems) => `von ${totalItems} Artikeln`}
        {...otherProps}
      />
    </div>
  );
};

CustomLabels.args = {
  activePage: 0,
  itemsPerPage: 50,
  viewPerPageOptions: [20, 50, 100],
};
