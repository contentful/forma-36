import React, { useState } from 'react';
import { Pagination } from '@contentful/f36-components';

export default function PaginationExample() {
  const [page, setPage] = useState(0);
  // isLastPage needs to be set to hide Next Button
  const isLastPage = page > 3;

  return (
    <Pagination
      activePage={page}
      onPageChange={setPage}
      itemsPerPage={10}
      isLastPage={isLastPage}
    />
  );
}
