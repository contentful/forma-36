import React from 'react';
import type { FrontMatter } from '../types';

const FrontMatterContext = React.createContext<FrontMatter | undefined>(
  undefined,
);

export const useFrontMatterContext = () => {
  return React.useContext(FrontMatterContext);
};

export const FrontMatterContextProvider = FrontMatterContext.Provider;
