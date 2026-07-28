import { createContext, useContext } from 'react';
import type { TableNextProps } from './TableNext';

type TableContext = {
  verticalAlign?: TableNextProps['verticalAlign'];
  isHeaderSticky?: boolean;
  setIsHeaderSticky?: (value: boolean) => void;
};

const TableContext = createContext<TableContext>({});

export const useTableContext = () => {
  const context = useContext(TableContext);

  return context;
};

export const TableContextProvider = TableContext.Provider;
