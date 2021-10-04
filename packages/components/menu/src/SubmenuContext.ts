import React, { ComponentPropsWithRef } from 'react';

export type SubmenuContextType = {
  getSubmenuListProps: (
    _props: ComponentPropsWithRef<'div'>,
  ) => ComponentPropsWithRef<'div'>;
};

const SubmenuContext = React.createContext<SubmenuContextType | undefined>(
  undefined,
);

export const useSubmenuContext = () => {
  const context = React.useContext(SubmenuContext);
  return context;
};

export const SubmenuContextProvider = SubmenuContext.Provider;
