import React from 'react';
import { UsageCardProps } from './UsageCard';

export type UsageCardContextType = {
  variant: NonNullable<UsageCardProps['variant']>;
};

const UsageCardContext = React.createContext<UsageCardContextType | undefined>(
  undefined,
);

export const useUsageCardContext = () => {
  const context = React.useContext(UsageCardContext);

  if (context === undefined) {
    throw new Error('component must be rendered within a UsageCard component');
  }

  return context;
};

export const UsageCardContextProvider = UsageCardContext.Provider;
