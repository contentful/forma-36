import React from 'react';
import { LayoutProps } from './Layout';

export type LayoutContextType = {
  variant: NonNullable<LayoutProps['variant']>;
  withHeader: boolean;
  withLeftSidebar: boolean;
  withRightSidebar: boolean;
  offsetTop: number;
};

const LayoutContext = React.createContext<LayoutContextType | undefined>(
  undefined,
);

export const useLayoutContext = () => {
  const context = React.useContext(LayoutContext);

  if (context === undefined) {
    throw new Error('component must be rendered within a Layout component');
  }

  return context;
};

export const LayoutContextProvider = LayoutContext.Provider;
