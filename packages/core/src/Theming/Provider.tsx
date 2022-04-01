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

  return themeKeys.reduce((acc, key) => {
    const defaultValue = baseTheme[key];
    const value = theme[key];

    if (
      typeof defaultValue === 'string' ||
      typeof value === 'string' ||
      Array.isArray(defaultValue)
    ) {
      return { ...acc, [key]: value ?? defaultValue };
    } else {
      return {
        ...acc,
        [key]: {
          ...baseTheme[key],
          ...theme[key],
        },
      };
    }

    return acc;
  }, {} as Theme);
}

export const Default = createTheme(
  {},
  {
    themeName: 'Default',
    colors: {
      primary: tokens.blue500,
      positive: tokens.green500,
      negative: tokens.red500,
      warning: tokens.orange400,
    },
    buttonPrimary: {
      mainColor: tokens.blue500,
      textColor: tokens.colorWhite,
      mainColorStates: tokens.blue600,
      boxShadow: tokens.glowPrimary,
      mainColorActive: tokens.blue700,
    },
    buttonSecondary: {
      mainColor: tokens.colorWhite,
      textColor: tokens.gray900,
      mainColorStates: tokens.gray100,
      boxShadow: tokens.glowPrimary,
      borderColor: tokens.gray300,
      mainColorActive: tokens.gray200,
    },
    buttonPositive: {
      mainColor: tokens.colorPositive,
      textColor: tokens.colorWhite,
      mainColorStates: tokens.green600,
      boxShadow: tokens.glowPositive,
      mainColorActive: tokens.green700,
    },
    buttonNegative: {
      mainColor: tokens.red600,
      textColor: tokens.colorWhite,
      mainColorStates: tokens.red400,
      boxShadow: tokens.glowNegative,
      mainColorActive: tokens.red900,
    },
    buttonTransparent: {
      mainColor: tokens.blue500,
      textColor: tokens.gray800,
      mainColorStates: tokens.gray100,
      boxShadow: tokens.glowPrimary,
      textColorActive: tokens.gray900,
      mainColorActive: tokens.gray100,
    },
    copyButton: {
      mainColor: tokens.colorWhite,
      mainColorHover: tokens.gray100,
      mainColorActive: tokens.gray200,
      mainColorDisableActive: tokens.gray300,
      borderColor: tokens.gray300,
      boxShadow: tokens.glowMuted,
    },
    globalStyles: {
      body: {
        backgroundColor: tokens.colorWhite,
        color: tokens.gray800,
      },
    },
    accordionHeader: {
      hover: {
        backgroundColor: tokens.gray100,
      },
      color: tokens.gray800,
    },
    baseCheckbox: {
      color: tokens.gray900,
    },
    baseInput: {
      disabled: {
        backgroundColor: tokens.gray100,
      },

      backgroundColor: tokens.colorWhite,
      borderColor: tokens.gray300,
      boxShadow: tokens.insetBoxShadowDefault,
      color: tokens.gray700,
      placeholder: tokens.gray500,
    },
    displayText: {
      color: tokens.gray900,
    },
    heading: {
      color: tokens.gray900,
    },
    subheading: {
      color: tokens.gray900,
    },
    tableCell: {
      color: tokens.gray700,
      colorSorting: tokens.gray900,
    },
    tableRow: {
      hover: {
        backgroundColor: tokens.gray100,
      },
    },
    text: {
      color: tokens.gray800,
    },
    card: {
      backgroundColor: tokens.colorWhite,
    },
    textLinkPrimary: {
      color: tokens.blue600,
      hoverColor: tokens.blue700,
    },
    textLinkSecondary: {
      color: tokens.gray600,
      hoverColor: tokens.gray700,
    },
  },
);

export const Dark: Theme = createTheme({
  themeName: 'Dark',
  colors: {
    primary: tokens.blue300,
    positive: tokens.green300,
    negative: tokens.red300,
    warning: tokens.orange200,
  },
  buttonPrimary: {
    mainColor: tokens.blue500,
    textColor: tokens.gray100,
    mainColorStates: tokens.blue600,
    boxShadow: tokens.glowPrimary,
    mainColorActive: tokens.blue500,
  },
  buttonSecondary: {
    mainColor: tokens.gray900,
    textColor: tokens.colorWhite,
    mainColorStates: tokens.gray800,
    boxShadow: tokens.glowPrimary,
    borderColor: tokens.gray600,
    mainColorActive: tokens.gray700,
  },
  buttonNegative: {
    mainColor: tokens.red500,
    textColor: tokens.colorWhite,
    mainColorStates: tokens.red600,
    boxShadow: tokens.glowNegative,
    mainColorActive: tokens.red500,
  },
  buttonPositive: {
    mainColor: tokens.green500,
    textColor: tokens.colorWhite,
    mainColorStates: tokens.green600,
    boxShadow: tokens.glowPositive,
    mainColorActive: tokens.green500,
  },
  buttonTransparent: {
    mainColor: tokens.blue500,
    textColor: tokens.colorWhite,
    mainColorStates: tokens.gray100,
    boxShadow: tokens.glowPrimary,
    textColorActive: tokens.gray800,
    mainColorActive: tokens.gray100,
  },
  copyButton: {
    mainColor: tokens.gray900,
    mainColorHover: tokens.gray800,
    mainColorActive: tokens.gray500,
    mainColorDisableActive: tokens.gray500,
    borderColor: tokens.gray600,
    boxShadow: tokens.glowMuted,
  },
  globalStyles: {
    body: {
      backgroundColor: tokens.gray900,
      color: tokens.gray100,
    },
  },
  accordionHeader: {
    hover: {
      backgroundColor: tokens.gray800,
    },
    color: tokens.gray100,
  },
  baseCheckbox: {
    color: tokens.gray100,
  },
  baseInput: {
    disabled: {
      backgroundColor: tokens.gray100,
    },

    backgroundColor: tokens.gray900,
    borderColor: tokens.gray700,
    boxShadow: 'inset 0px 2px 0px rgba(225, 228, 232, 0.01);',
    color: tokens.gray100,
    placeholder: tokens.gray300,
  },
  displayText: {
    color: tokens.gray100,
  },
  heading: {
    color: tokens.gray100,
  },
  subheading: {
    color: tokens.gray100,
  },
  tableCell: {
    color: tokens.gray300,
    colorSorting: tokens.gray100,
  },
  tableRow: {
    hover: {
      backgroundColor: tokens.gray800,
    },
  },
  text: {
    color: tokens.gray200,
  },
  card: {
    backgroundColor: tokens.gray900,
  },
  textLinkPrimary: {
    color: tokens.blue400,
    hoverColor: tokens.blue500,
  },
  textLinkSecondary: {
    color: tokens.gray400,
    hoverColor: tokens.gray500,
  },
});

export const Forma36Context = createContext<{
  isDarkMode: boolean;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  theme: Theme;
}>({ isDarkMode: false, setTheme: () => {}, theme: Default });

export interface Forma36ProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export function Forma36Provider({
  children,
  theme: defaultTheme = Default,
}: Forma36ProviderProps) {
  const [theme, setTheme] = useState(defaultTheme);
  const isDarkMode = theme.themeName === Dark.themeName;

  return (
    <Forma36Context.Provider value={{ isDarkMode, setTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Forma36Context.Provider>
  );
}

export const useTheme = useEmotionTheme;
