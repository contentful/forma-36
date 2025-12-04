import React from 'react';

export type MultiselectContextType = {
  focusList: () => void;
  searchValue: string;
};

const MultiselectContext = React.createContext<
  MultiselectContextType | undefined
>(undefined);

export const useMultiselectContext = () => {
  const context = React.useContext(MultiselectContext);

  if (context === undefined) {
    throw new Error('component must be rendered within a Accordion component');
  }

  return context;
};

export const MultiselectContextProvider = MultiselectContext.Provider;
