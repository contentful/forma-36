import React from 'react';
import { LayoutProps } from './Layout';

export type LayoutContextType = {
  variant: NonNullable<LayoutProps['variant']>;
  withHeader: boolean;
  withLeftSidebar: boolean;
  withRightSidebar: boolean;
  withResponsiveHeader: boolean;
  offsetTop: number;
};

const LayoutContext = React.createContext<LayoutContextType | undefined>(
  undefined,
);

export const useLayoutContext = (allowExternal?: boolean) => {
  const context = React.useContext(LayoutContext);

  if (context === undefined) {
    if (allowExternal) {
      return {
        variant: 'wide' as LayoutProps['variant'],
        withHeader: false,
        withLeftSidebar: false,
        withRightSidebar: false,
        withResponsiveHeader: false,
        offsetTop: 0,
      };
    }
    throw new Error('component must be rendered within a Layout component');
  }

  return context;
};

export const LayoutContextProvider = LayoutContext.Provider;
