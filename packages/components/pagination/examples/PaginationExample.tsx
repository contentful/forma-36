import React, { useState } from 'react';
import { Pagination } from '@contentful/f36-pagination';

export default function PaginationExample() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      activePage={page}
      onPageChange={setPage}
      totalItems={120}
      itemsPerPage={10}
    />
  );
}
