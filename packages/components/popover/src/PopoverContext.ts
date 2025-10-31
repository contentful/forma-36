import React from 'react';
import { usePopover } from './usePopover';

export type PopoverContextType =
  | (ReturnType<typeof usePopover> & {
      setLabelId: React.Dispatch<React.SetStateAction<string | undefined>>;
      setDescriptionId: React.Dispatch<
        React.SetStateAction<string | undefined>
      >;
    })
  | null;
const PopoverContext = React.createContext<PopoverContextType>(null);

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
