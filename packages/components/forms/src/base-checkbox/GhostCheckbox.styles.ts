import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import type { GhostCheckboxProps } from './GhostCheckbox';
import tokens from '@contentful/f36-tokens';

type stylesArgs = Omit<GhostCheckboxProps, 'type'>;

const getBaseGhostStyles = ({ isDisabled }): CSSObject => ({
  alignItems: 'center',
  background: !isDisabled ? tokens.colorWhite : tokens.gray300,
  border: `2px solid ${tokens.gray300}`,
  boxSizing: 'border-box',
  display: 'inline-flex',
  height: tokens.spacingM,
  justifyContent: 'center',
  width: tokens.spacingM,
});

const getCheckboxStyles = ({ isChecked, isDisabled, isIndeterminate }) => {
  const baseStyle = {
    ...getBaseGhostStyles({ isDisabled }),
    backgroundColor: !isDisabled ? tokens.colorWhite : tokens.gray300,
    borderRadius: tokens.borderRadiusSmall,
    '& svg': {
      fill: !isDisabled ? tokens.colorWhite : tokens.gray300,
    },
  };

  const checkedStyle = {
    backgroundColor: !isDisabled ? tokens.blue600 : tokens.gray300,
    borderColor: !isDisabled ? tokens.blue600 : tokens.gray300,
    '& svg': {
      fill: !isDisabled ? tokens.colorWhite : tokens.gray600,
    },
  };

  return css([baseStyle, (isIndeterminate || isChecked) && checkedStyle]);
};

const getRadioStyles = ({ isChecked, isDisabled }) => {
  const baseBefore = {
    content: '""',
    borderRadius: '50%',
    backgroundColor: !isDisabled ? tokens.colorWhite : tokens.gray300,
    width: tokens.borderRadiusMedium,
    height: tokens.borderRadiusMedium,
  };

  const baseStyle = {
    ...getBaseGhostStyles({ isDisabled }),
    backgroundColor: !isDisabled ? tokens.colorWhite : tokens.gray300,
    borderRadius: '50%',
  };

  const checkedStyle = {
    backgroundColor: !isDisabled ? tokens.blue600 : tokens.gray300,
    borderColor: !isDisabled ? tokens.blue600 : tokens.gray300,
    '&:before': {
      ...baseBefore,
      backgroundColor: !isDisabled ? tokens.colorWhite : tokens.gray600,
    },
  };

  return css([baseStyle, isChecked && checkedStyle]);
};

const getSwitchStyles = ({ isChecked, isDisabled }) => {
  const baseStyle: CSSObject = {
    ...getBaseGhostStyles({ isDisabled }),
    background: tokens.gray600,
    borderColor: tokens.gray600,
    borderRadius: tokens.borderRadiusSmall,
    position: 'relative',
    width: tokens.spacingXl,
    '&:before': {
      background: tokens.colorWhite,
      borderRadius: `calc(${tokens.borderRadiusSmall}/2)`,
      content: '""',
      height: tokens.spacingS,
      left: 0,
      position: 'absolute',
      transition: `transform ${tokens.transitionEasingDefault} ${tokens.transitionDurationDefault}`,
      width: tokens.spacingS,
    },
  };

  const checkedStyle: CSSObject = {
    background: tokens.blue600,
    borderColor: tokens.blue600,
    '&:before': {
      transform: `translateX(${tokens.spacingM})`,
    },
  };

  const disabledStyle: CSSObject = {
    background: tokens.gray200,
    borderColor: tokens.gray200,
    '&:before': {
      background: tokens.gray400,
    },
    '& svg': {
      fill: tokens.gray400,
    },
  };

  return css([
    baseStyle,
    isChecked && checkedStyle,
    isDisabled && disabledStyle,
  ]);
};

const getStyles = (args: stylesArgs) => {
  const { isChecked, isDisabled, isIndeterminate } = args;
  return {
    radio: getRadioStyles({ isChecked, isDisabled }),
    checkbox: getCheckboxStyles({ isChecked, isDisabled, isIndeterminate }),
    switch: getSwitchStyles({ isChecked, isDisabled }),
  };
};

export default getStyles;
