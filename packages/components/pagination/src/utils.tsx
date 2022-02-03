export function getExpectedItemsOfActivePage(
  activePage: number,
  totalItems: number,
  itemsPerPage: number,
): number {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (activePage === totalPages) {
    return totalItems % itemsPerPage || itemsPerPage;
  }

  return itemsPerPage;
}
