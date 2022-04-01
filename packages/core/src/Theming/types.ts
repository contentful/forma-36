export type ThemeName = 'Dark' | 'Default' | 'Light';

interface buttonType {
  mainColor: string;
  textColor: string;
  mainColorStates: string;
  boxShadow: string;
  mainColorActive: string;
}

export interface Theme {
  themeName: ThemeName;
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

  accordionHeader: {
    color: string;
  };

  baseCheckbox: {
    color: string;
  };

  baseInput: {
    disabled: {
      backgroundColor: string;
    };

    backgroundColor: string;
    borderColor: string;
    boxShadow: string;
    color: string;
    placeholder: string;
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
  textLinkSecondary: {
    color: string;
    hoverColor: string;
  };
}
