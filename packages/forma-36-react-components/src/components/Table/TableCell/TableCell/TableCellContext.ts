import React from 'react';

export const contextOptions = {
  body: { name: 'body', element: 'td', offsetTop: 0 },
  head: { name: 'head', element: 'th', offsetTop: 0 },
};

export const TableCellContext = React.createContext(contextOptions.body);
