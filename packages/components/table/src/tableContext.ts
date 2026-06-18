import { createContext, useContext } from 'react';
import { TableProps } from './Table';

export type TableContext = {
  verticalAlign?: TableProps['verticalAlign'];
  columnTitles?: Array<string>;
};

export const TableContext = createContext<TableContext>({});

export const useTableContext = () => {
  const context = useContext(TableContext);

  return context;
};

export const TableContextProvider = TableContext.Provider;
