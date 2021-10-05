import React, { ComponentPropsWithRef } from 'react';

export type SubmenuContextType = {
  isOpen: boolean;
  getSubmenuListProps: (
    _props: ComponentPropsWithRef<'div'>,
  ) => { 'data-parent-menu': string } & ComponentPropsWithRef<'div'>;
  getSubmenuTriggerProps: (
    _props: ComponentPropsWithRef<'button'>,
  ) => ComponentPropsWithRef<'button'>;
};

const SubmenuContext = React.createContext<SubmenuContextType | undefined>(
  undefined,
);

export const useSubmenuContext = () => {
  const context = React.useContext(SubmenuContext);
  return context;
};

export const SubmenuContextProvider = SubmenuContext.Provider;
