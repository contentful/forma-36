import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '../src/Pagination';

export default {
  component: Pagination,
  title: 'Components/Pagination',
} as Meta<typeof Pagination>;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    activePage: 0,
    itemsPerPage: 50,
    viewPerPageOptions: [20, 50, 100],
  },
  render: (args) => {
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
  },
};
