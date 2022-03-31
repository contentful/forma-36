import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import tokens from '@contentful/f36-tokens';
import { useTheme as useEmotionTheme } from 'emotion-theming';

import type { Theme } from './types';

export function createTheme(
  theme: Partial<Theme>,
  baseTheme: Theme = Default,
): Theme {
  const themeKeys = Object.keys(baseTheme);

  return themeKeys.reduce((accumulator: any, key: keyof Theme) => {
    const defaultValue = baseTheme[key];
    const value = theme[key];

    if (
      typeof defaultValue === 'string' ||
      typeof value === 'string' ||
      Array.isArray(defaultValue)
    ) {
      accumulator[key] = value == null ? defaultValue : value;
    } else {
      accumulator[key] = {
        ...baseTheme[key],
        ...theme[key],
      };
    }

    return accumulator;
  }, {});
}

export const Default = createTheme(
  {},
  {
    colors: {
      primary: tokens.blue500,
      positive: tokens.green500,
      negative: tokens.red500,
      warning: tokens.orange400,
    },
  },
);

export const Dark = createTheme({
  colors: {
    primary: tokens.blue200,
    positive: tokens.green200,
    negative: tokens.red200,
    warning: tokens.orange100,
  },
});

export const Forma36Context = createContext<{
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  theme: Theme;
}>({ setTheme: () => {}, theme: Default });

export interface Forma36ProviderProps {
  children: React.ReactNode;
  // themes?: Record<ThemeName, Theme>;
  theme?: Theme;
}

export function Forma36Provider({
  children,
  theme: defaultTheme = Default,
}: Forma36ProviderProps) {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <Forma36Context.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Forma36Context.Provider>
  );
}

export const useTheme = useEmotionTheme;
