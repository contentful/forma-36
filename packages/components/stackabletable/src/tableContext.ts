import { createContext, useContext } from 'react';

export type StackableBreakpointValue =
  `${number}px` | `${number}rem` | `${number}em`;

type StackableTableContext = {
  columnTitles: Array<string>;
  stackableBreakpoint: StackableBreakpointValue;
};

const StackableTableContext = createContext<StackableTableContext>({
  columnTitles: [],
  stackableBreakpoint: '700px',
});

export const useStackableTableContext = () => useContext(StackableTableContext);

export const StackableTableContextProvider = StackableTableContext.Provider;
