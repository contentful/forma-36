import React, { useState } from 'react';
import { Pagination } from '@contentful/f36-components';

export default function PaginationWithTotalExample() {
  const [page, setPage] = useState(0);

  return (
    <Pagination
      activePage={page}
      onPageChange={setPage}
      itemsPerPage={20}
      totalItems={113}
    />
  );
}
