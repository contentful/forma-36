import { createContext, useContext } from 'react';
import type { TableNextProps, StackableBreakpointValue } from './TableNext';

type TableContext = {
  verticalAlign?: TableNextProps['verticalAlign'];
  isHeaderSticky?: boolean;
  setIsHeaderSticky?: (value: boolean) => void;
  isStackable?: boolean;
  columnTitles?: Array<string>;
  hasColumnTitles?: boolean;
  stackableBreakpoint?: StackableBreakpointValue;
};

const TableContext = createContext<TableContext>({});

export const useTableContext = () => {
  const context = useContext(TableContext);

  return context;
};

export const TableContextProvider = TableContext.Provider;
