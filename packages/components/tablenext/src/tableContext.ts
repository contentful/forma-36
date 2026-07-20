import { createContext, useContext } from 'react';
import { TableNextProps } from './TableNext';

export type TableContext = {
  verticalAlign?: TableNextProps['verticalAlign'];
  isHeaderSticky?: boolean;
  setIsHeaderSticky?: (value: boolean) => void;
};

export const TableContext = createContext<TableContext>({});

export const useTableContext = () => {
  const context = useContext(TableContext);

  return context;
};

export const TableContextProvider = TableContext.Provider;
