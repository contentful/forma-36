import { createContext, useContext } from 'react';
import type { PropComponentDefinition } from './types';

// List of props that we do not need to show
// because they are, basically, inherited props from HTML elements or React
const propsToHide = ['ref', 'key', 'style', 'children'];

export type PropsContextType = {
  [key: string]: PropComponentDefinition;
};

const PropsContext = createContext<PropsContextType>(undefined);

export const usePropsContext = () => {
  const context = useContext(PropsContext);

  if (context === undefined) {
    throw new Error(
      'usePropsContext must be used within a PropsContextProvider',
    );
  }

  return context;
};

export function usePropsOf(componentName: string) {
  const propsContext = usePropsContext();

  if (!propsContext[componentName]) {
    return [];
  }

  const { props } = propsContext[componentName];
  const allProps = Object.values(props)
    .filter(
      // We filter out the props that come from @types/react definitions and/or are HTML elements
      (prop) =>
        !prop.parent?.fileName.includes('@types/react/index.d.ts') &&
        !propsToHide.includes(prop.name),
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const requiredProps = [];
  const optionalProps = [];

  allProps.forEach((prop) => {
    if (prop.required) {
      requiredProps.push(prop);
    } else {
      optionalProps.push(prop);
    }
  });

  return [...requiredProps, ...optionalProps];
}

export const PropsContextProvider = PropsContext.Provider;
