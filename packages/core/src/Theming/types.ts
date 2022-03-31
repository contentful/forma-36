export type ThemeName = 'Dark' | 'Light';

export interface Theme {
  colors: {
    primary: string;
    positive: string;
    negative: string;
    warning: string;
  };
}
