import React from 'react';
import { Accordion } from '../dist';

export type AccordionContextType = {
  align?: 'start' | 'end';
};

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined,
);

export const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);

  if (context === undefined) {
    throw new Error('component must be rendered within a Accordion component');
  }

  return context;
};

export const AccordionContextProvider = AccordionContext.Provider;
