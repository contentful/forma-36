import React, { HTMLProps } from 'react';

export type PopoverContextType = {
  isOpen: boolean;
  usePortal: boolean;
  getPopoverProps: (
    _props: HTMLProps<HTMLDivElement>,
    _ref: React.Ref<HTMLDivElement>,
  ) => HTMLProps<HTMLDivElement>;
  getTriggerProps: (_ref: React.Ref<HTMLElement>) => HTMLProps<HTMLElement>;
};

const PopoverContext = React.createContext<PopoverContextType | undefined>(
  undefined,
);

export const usePopoverContext = () => {
  const context = React.useContext(PopoverContext);

  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};

export const PopoverContextProvider = PopoverContext.Provider;
