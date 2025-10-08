import React, { ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react';

export type SubmenuContextType = {
  isOpen: boolean;
  getSubmenuListProps: (
    _props: ComponentPropsWithRef<'div'>,
  ) => { 'data-parent-menu': string } & ComponentPropsWithoutRef<'div'>;
  getSubmenuTriggerProps: (
    _props: ComponentPropsWithRef<'button'>,
    _ref: React.Ref<HTMLButtonElement>,
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
