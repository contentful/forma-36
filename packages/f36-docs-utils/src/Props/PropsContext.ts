import { createContext, useContext } from 'react';
import type { PropComponentDefinition } from './types';

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
  const { props } = propsContext[componentName];
  const allProps = Object.values(props).sort((a, b) =>
    a.name.localeCompare(b.name),
  );

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
