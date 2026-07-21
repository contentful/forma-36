import { createContext, useContext } from 'react';
import { TableNextProps } from './TableNext';

export type TableContext = {
  verticalAlign?: TableNextProps['verticalAlign'];
  isHeaderSticky?: boolean;
  isStackable?: boolean;
  columnTitles?: Array<string>;
  hasColumnTitles?: boolean;
};

export const TableContext = createContext<TableContext>({});

export const useTableContext = () => {
  const context = useContext(TableContext);

  return context;
};

export const TableContextProvider = TableContext.Provider;
