import React from 'react';
import { useTooltip } from './useTooltip';

type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = React.createContext<ContextType>(null);

export const useTooltipContext = () => {
  const context = React.useContext(TooltipContext);

  if (context === undefined) {
    throw new Error(
      'useTooltipContext must be used within a TooltipContextProvider ',
    );
  }

  return context;
};

export const TooltipContextProvider = TooltipContext.Provider;
