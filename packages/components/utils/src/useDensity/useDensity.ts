import React from 'react';

export type Density = 'low' | 'high';

const DensityContext = React.createContext<Density>('low');

/**
 * Use this hook to adapt your component styling/rendering based on the density.
 * The density is retrieved from the `DensityProvider`.
 */
export const useDensity = () => {
  const context = React.useContext(DensityContext);

  return context;
};

export const DensityProvider = DensityContext.Provider;
