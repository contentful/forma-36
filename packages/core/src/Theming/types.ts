export type ThemeName = 'Dark' | 'Light';

interface buttonType {
  mainColor: string;
  textColor: string;
  mainColorStates: string;
  boxShadow: string;
  mainColorActive: string;
}

export interface Theme {
  colors: {
    primary: string;
    positive: string;
    negative: string;
    warning: string;
  };
  buttonPrimary: buttonType;
  buttonSecondary: buttonType & {
    borderColor: string;
  };
  buttonPositive: buttonType;
  buttonNegative: buttonType;
  buttonTransparent: buttonType & {
    textColorActive: string;
  };
  copyButton: {
    mainColor: string;
    mainColorHover: string;
    mainColorActive: string;
    boxShadow: string;
    mainColorDisableActive: string;
    borderColor: string;
  };
  globalStyles: {
    body: {
      backgroundColor: string;
      color: string;
    };
  };

  card: {
    backgroundColor: string;
  };

  displayText: {
    color: string;
  };

  heading: {
    color: string;
  };

  subheading: {
    color: string;
  };

  text: {
    color: string;
  };

  textLinkPrimary: {
    color: string;
    hoverColor: string;
  };
}
