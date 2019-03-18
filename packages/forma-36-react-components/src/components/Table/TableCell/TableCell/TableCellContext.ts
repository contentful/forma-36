import React from 'react';

export const contextOptions = {
  body: { name: 'body', element: 'td', offsetTop: 0 as number | string },
  head: { name: 'head', element: 'th', offsetTop: 0 as number | string },
};

export const TableCellContext = React.createContext(contextOptions.body);
