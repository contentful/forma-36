import React from 'react';

export const contextOptions = {
  body: { name: 'body', element: 'td' },
  head: { name: 'head', element: 'th' },
};

export const TableCellContext = React.createContext(contextOptions.body);
