import { createContext, useContext } from 'react';
import type { TableProps } from './Table';

type TableContext = {
  verticalAlign?: TableProps['verticalAlign'];
  isHeaderSticky?: boolean;
  setIsHeaderSticky?: (value: boolean) => void;
};

const TableContext = createContext<TableContext>({});

export const useTableContext = () => {
  const context = useContext(TableContext);

  return context;
};

export const TableContextProvider = TableContext.Provider;
