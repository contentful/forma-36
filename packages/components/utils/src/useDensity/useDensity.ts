import React from 'react';

export type Density = 'low' | 'high';

const DensityContext = React.createContext<Density>('low');

export const useDensity = () => {
  const context = React.useContext(DensityContext);

  return context;
};

export const DensityProvider = DensityContext.Provider;
