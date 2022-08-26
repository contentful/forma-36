import React, { useState } from 'react';
import { Pagination } from '@contentful/f36-components';

export default function PaginationWithTotalAndViewPerPageExample() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const handleViewPerPageChange = (i) => {
    // Reset page to match item being shown on new View per page
    setPage(Math.floor((itemsPerPage * page + 1) / i));
    setItemsPerPage(i);
  };

  return (
    <Pagination
      activePage={page}
      onPageChange={setPage}
      totalItems={113}
      showViewPerPage
      viewPerPageOptions={[20, 50, 100]}
      itemsPerPage={itemsPerPage}
      onViewPerPageChange={handleViewPerPageChange}
    />
  );
}
