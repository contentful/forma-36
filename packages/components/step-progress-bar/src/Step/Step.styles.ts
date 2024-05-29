import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    wrapper: css({
      width: '100%',
    }),
    lastStepWrapper: css({
      width: 'auto',
    }),
    horizontalStepWrapper: css({
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'baseline',
      justifyContent: 'center',
    }),
    verticalStepWrapper: css({
      gap: tokens.spacing2Xs,
      alignItems: 'flex-start',
    }),
    horizontalStep: css({
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }),
    verticalStep: css({
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    listItem: css({
      listStyle: 'none',
    }),
    button: css({
      borderRadius: '50%',
      border: `2px solid ${tokens.gray300}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: tokens.gray300,
      width: tokens.spacingL,
      height: '24px',
      textAlign: 'center',
      backgroundColor: 'white',
      fontWeight: tokens.fontWeightDemiBold,
      fontSize: tokens.fontSizeS,
      padding: 0,
      // TO DO: do we want click feedback?
      // '&:focus': {
      //   outline: '0',
      //   boxShadow: tokens.glowPrimary,
      // },
    }),
    icon: css({
      // TO DO: adjust sizing of icon for warning only?
      // transform: 'translateY(2px)',
    }),
    isActive: css({
      color: tokens.colorPrimary,
      borderColor: tokens.colorPrimary,
    }),
    isDisabled: css({
      color: tokens.gray200,
      borderColor: tokens.gray200,
    }),
    isComplete: css({
      color: tokens.colorWhite,
      borderColor: tokens.colorPrimary,
      backgroundColor: tokens.colorPrimary,
    }),
    isInvalid: css({
      color: tokens.colorWhite,
      borderColor: tokens.colorNegative,
      backgroundColor: tokens.colorNegative,
    }),
    isWarning: css({
      color: tokens.colorWhite,
      borderColor: tokens.colorWarning,
      backgroundColor: tokens.colorWarning,
    }),
    isClickable: css({
      cursor: 'pointer',
    }),
    stepLabel: css({
      whiteSpace: 'nowrap',
    }),
    horizontalStepConnector: (isBeforeActiveStep: boolean) =>
      css({
        borderTop: `2px solid ${
          isBeforeActiveStep ? tokens.colorPrimary : tokens.gray300
        }`,
        height: 0,
        width: '100%',
        zIndex: '-1',
        transition: 'border-color 0.3s ease-in-out',
      }),
    verticalStepConnector: (
      isBeforeActiveStep: boolean,
      verticalLineHeight: number,
    ) =>
      css({
        borderLeft: `2px solid ${
          isBeforeActiveStep ? tokens.colorPrimary : tokens.gray300
        }`,
        height: verticalLineHeight,
        width: 0,
        zIndex: '-1',
      }),

    // TODO: clean up unused styles
    progress: css({
      position: 'relative',
    }),
    list: (width: string) =>
      css({
        position: 'relative',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '0',
          height: '2px',
          zIndex: tokens.zIndexNegative,
          transform: 'translateY(-50%)',
        },
        '&::before': {
          backgroundColor: tokens.gray300,
          width: '100%',
        },
        '&::after': {
          backgroundColor: tokens.colorPrimary,
          width,
          transition: `width ${tokens.transitionDurationLong} ${tokens.transitionEasingDefault}`,
        },
      }),
    lastItem: css({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: '1px',
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
    }),
  };
};
