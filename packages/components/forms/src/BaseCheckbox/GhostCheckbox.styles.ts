import { css } from 'emotion';
import type { CSSObject } from '@emotion/serialize';
import type { GhostCheckboxProps } from './GhostCheckbox';
import tokens from '@contentful/f36-tokens';

type stylesArgs = Pick<GhostCheckboxProps, 'isDisabled' | 'size'>;

const getBaseGhostStyles = ({ isDisabled }): CSSObject => ({
  alignItems: 'center',
  background: !isDisabled ? tokens.colorWhite : tokens.gray300,
  border: `2px solid ${tokens.gray300}`,
  boxSizing: 'border-box',
  display: 'inline-flex',
  height: tokens.spacingM,
  justifyContent: 'center',
  marginRight: tokens.spacingXs,
  width: tokens.spacingM,
});

const getCheckboxStyles = ({ isDisabled }) => {
  const baseStyle = {
    ...getBaseGhostStyles({ isDisabled }),
    backgroundColor: !isDisabled ? tokens.colorWhite : tokens.gray300,
    borderRadius: tokens.borderRadiusSmall,
    '& svg': {
      fill: !isDisabled ? tokens.colorWhite : tokens.gray300,
    },
    'input:indeterminate + &, input:checked + &': {
      backgroundColor: !isDisabled ? tokens.blue600 : tokens.gray300,
      borderColor: !isDisabled ? tokens.blue600 : tokens.gray300,
      '& svg': {
        fill: !isDisabled ? tokens.colorWhite : tokens.gray600,
      },
    },
  };

  return css(baseStyle);
};

const getRadioStyles = ({ isDisabled }) => {
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
    '&:before': {
      ...baseBefore,
    },
    'input:checked + &': {
      backgroundColor: !isDisabled ? tokens.blue600 : tokens.gray300,
      borderColor: !isDisabled ? tokens.blue600 : tokens.gray300,
      '&:before': {
        backgroundColor: !isDisabled ? tokens.colorWhite : tokens.gray600,
      },
    },
  };

  return css(baseStyle);
};

const getSwitchStyles = ({ isDisabled, size }) => {
  const sizeStyle =
    size === 'small'
      ? {
          height: tokens.spacingM,
          width: tokens.spacingXl,
          '&:before': {
            height: tokens.spacingS,
            width: tokens.spacingS,
          },
          'input:checked + &:before': {
            transform: `translateX(${tokens.spacingM})`,
          },
        }
      : {
          height: '20px',
          width: '40px',
          '&:before': {
            height: tokens.spacingM,
            width: tokens.spacingM,
          },
          'input:checked + &:before': {
            transform: `translateX(20px)`,
          },
        };

  const baseStyle: CSSObject = {
    ...getBaseGhostStyles({ isDisabled }),
    background: tokens.gray600,
    borderColor: tokens.gray600,
    borderRadius: tokens.borderRadiusSmall,
    justifyContent: 'space-around',
    position: 'relative',
    flexShrink: 0,
    '&:before': {
      background: tokens.colorWhite,
      borderRadius: `calc(${tokens.borderRadiusSmall}/2)`,
      content: '""',
      left: 0,
      position: 'absolute',
      transition: `transform ${tokens.transitionEasingDefault} ${tokens.transitionDurationDefault}`,
    },
    'input:checked + &': {
      background: tokens.blue600,
      borderColor: tokens.blue600,
    },
  };

  const disabledStyle: CSSObject = {
    '&, input:checked + &': {
      background: tokens.gray200,
      borderColor: tokens.gray200,
    },
    '&:before': {
      background: tokens.gray400,
    },
    '& svg': {
      fill: tokens.gray400,
    },
  };

  return css([baseStyle, sizeStyle, isDisabled && disabledStyle]);
};

const getStyles = (args: stylesArgs) => {
  const { isDisabled, size } = args;
  return {
    radio: getRadioStyles({ isDisabled }),
    checkbox: getCheckboxStyles({ isDisabled }),
    switch: getSwitchStyles({ isDisabled, size }),
  };
};

export default getStyles;
