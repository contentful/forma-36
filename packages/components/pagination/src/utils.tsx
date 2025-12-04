export function getRangeText({
  activePage,
  itemsPerPage,
  totalItems = 0,
  pageLength,
  isLastPage = false,
  totalItemsLabel,
}: {
  activePage: number;
  itemsPerPage: number;
  totalItems?: number;
  pageLength?: number;
  isLastPage?: boolean;
  totalItemsLabel?: (totalItems: number) => string;
}): string {
  const total =
    totalItems && totalItemsLabel ? totalItemsLabel(totalItems) : '';
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
