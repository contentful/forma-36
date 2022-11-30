import React, { HTMLProps } from 'react';

export type PopoverContextType = {
  isOpen: boolean;
  usePortal: boolean;
  renderOnlyWhenOpen: boolean;
  getPopoverProps: (
    _props: HTMLProps<HTMLDivElement>,
    _ref: React.Ref<HTMLDivElement>,
  ) => HTMLProps<HTMLDivElement>;
  getTriggerProps: (
    _props: HTMLProps<HTMLElement>,
    _ref: React.Ref<HTMLElement>,
  ) => HTMLProps<HTMLElement>;
};

const PopoverContext = React.createContext<PopoverContextType | undefined>(
  undefined,
);

export const usePopoverContext = () => {
  const context = React.useContext(PopoverContext);

  if (context === undefined) {
    throw new Error(
      'usePopoverContext must be used within a PopoverContextProvider',
    );
  }

  return context;
};

export const PopoverContextProvider = PopoverContext.Provider;
