import React from 'react';

type TableCellContextOption = {
  name: 'body' | 'head';
  element: 'td' | 'th';
  offsetTop?: number | string;
};

type TableCellContextOptions = {
  body: TableCellContextOption;
  head: TableCellContextOption;
};

export const contextOptions: TableCellContextOptions = {
  body: {
    name: 'body',
    element: 'td',
  },
  head: {
    name: 'head',
    element: 'th',
  },
};

export const TableCellContext = React.createContext(contextOptions.body);
