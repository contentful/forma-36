export function getRangeText({
  activePage,
  itemsPerPage,
  totalItems = 0,
  pageLength,
  isLastPage = false,
  totalItemsLabels,
}: {
  activePage: number;
  itemsPerPage: number;
  totalItemsLabels: { of: string; items: string };
  totalItems?: number;
  pageLength?: number;
  isLastPage?: boolean;
}): string {
  const total = totalItems
    ? `${totalItemsLabels.of} ${totalItems} ${totalItemsLabels.items}`
    : '';
  const firstItem = activePage * itemsPerPage + 1;
  if (isLastPage && pageLength) {
    return [`${firstItem} - ${firstItem - 1 + pageLength}`, total].join(' ');
  }
  if (totalItems) {
    const lastItem = Math.min(firstItem - 1 + itemsPerPage, totalItems);
    return [`${firstItem} - ${lastItem}`, total].join(' ');
  }
  return [`${firstItem} - ${firstItem - 1 + itemsPerPage}`, total].join(' ');
}
