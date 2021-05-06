import { createContext } from 'react';

export type TableCellContextOption = {
  name: 'body' | 'head';
  as: 'td' | 'th';
  offsetTop: number | string;
};

export const contextOptions: {
  body: TableCellContextOption;
  head: TableCellContextOption;
} = {
  body: { name: 'body', as: 'td', offsetTop: 0 },
  head: { name: 'head', as: 'th', offsetTop: 0 },
};

export const TableCellContext = createContext(contextOptions.body);
