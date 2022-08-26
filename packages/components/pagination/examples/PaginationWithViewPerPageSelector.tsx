import React, { useState } from 'react';
import { Pagination } from '@contentful/f36-components';

export default function PaginationWithViewPerPageSelector() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  // isLastPage needs to be set to hide Next Button
  const isLastPage = (page + 1) * itemsPerPage >= 120;
  // Only so example is rendered with fewer items on last page.
  const pageLength = isLastPage ? 18 : undefined;

  const handleViewPerPageChange = (i) => {
    // Reset page to match item being shown on new View per page
    setPage(Math.floor((itemsPerPage * page + 1) / i));
    setItemsPerPage(i);
  };

  return (
    <Pagination
      activePage={page}
      onPageChange={setPage}
      isLastPage={isLastPage}
      showViewPerPage
      viewPerPageOptions={[20, 50, 100]}
      itemsPerPage={itemsPerPage}
      onViewPerPageChange={handleViewPerPageChange}
      pageLength={pageLength}
    />
  );
}
