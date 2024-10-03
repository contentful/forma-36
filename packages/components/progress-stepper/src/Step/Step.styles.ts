import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    horizontalListItem: (isBeforeActiveStep: boolean, isActive: boolean) =>
      css({
        display: 'grid',
        gridTemplateColumns: 'auto',
        gridTemplateRows: '40px 1fr',
        placeItems: 'center',
        textAlign: 'center',
        '&::before': {
          gridColumnStart: 1,
          gridRowStart: 1,
          height: '2px',
          width: '100%',
          content: '""',
          marginInlineStart: '-100%',
          backgroundColor:
            isBeforeActiveStep || isActive
              ? tokens.colorPrimary
              : tokens.gray300,
        },

        '&:first-child::before': {
          content: 'none',
        },

        '&::after': {
          content: 'counter(step)',
          counterIncrement: 'step',
          zIndex: 1,
          position: 'relative',
          gridColumnStart: 1,
          gridRowStart: 1,
          display: 'grid',
          height: '24px',
          width: '24px',
          placeItems: 'center',
          placeSelf: 'center',
          borderRadius: '50%',
          backgroundColor: tokens.colorPrimary,
        },
      }),
    verticalListItem: (isBeforeActiveStep: boolean, isActive: boolean) =>
      css({
        margin: 0,
        padding: 0,
        display: 'grid',
        gap: `0 ${tokens.spacingXs}`,
        gridTemplateColumns: '24px 1fr',
        gridTemplateRows: '0fr 24px 1fr',
        gridTemplateAreas: `
        "divider-before ."
        "circle label"
        "divider-after ."
        `,
        alignItems: 'center',
        '&::before': {
          position: 'relative',
          display: 'block',
          content: '""',
          height: '100%',
          backgroundColor:
            isBeforeActiveStep || isActive
              ? tokens.colorPrimary
              : tokens.gray300,
          transition: `background-color ${tokens.transitionDurationLong} ${tokens.transitionEasingDefault}`,
          gridArea: 'divider-before',
          justifySelf: 'center',
          width: '2px',
        },
        '&::after': {
          position: 'relative',
          display: 'block',
          content: '""',
          height: '100%',
          backgroundColor: isBeforeActiveStep
            ? tokens.colorPrimary
            : tokens.gray300,
          transition: `background-color ${tokens.transitionDurationLong} ${tokens.transitionEasingDefault}`,
          gridArea: 'divider-after',
          justifySelf: 'center',
          width: '2px',
        },
        '&:first-child::before': { visibility: 'hidden' },
        '&:last-child::after': { visibility: 'hidden' },
      }),
    listItemContent: css({
      textAlign: 'center',
      height: '24px',
      width: '24px',
      border: `2px solid ${tokens.gray300}`,
      borderRadius: '50%',
      backgroundColor: 'white',
      fontWeight: tokens.fontWeightDemiBold,
      color: tokens.gray600,
      '& svg': {
        height: '20px',
      },
      gridArea: 'circle',
    }),
    horizontalLabel: css({
      textAlign: 'center',
      color: tokens.gray900,
    }),
    verticalLabel: css({
      gridArea: 'label',
      justifySelf: 'start',
      color: tokens.gray900,
      maxHeight: '20px',
    }),
    disabledLabel: css({
      color: tokens.gray500,
    }),
    incompleteLabel: css({
      color: tokens.gray700,
    }),
    incomplete: css({
      '& p': {
        color: tokens.gray700,
      },
      '&::after': {
        content: 'counter(step)',
        counterIncrement: 'step',
        color: tokens.gray600,
        fontWeight: tokens.fontWeightDemiBold,
        backgroundColor: tokens.colorWhite,
        border: `2px solid ${tokens.gray300}`,
        borderRadius: '50%',
      },
    }),
    incompleteIcon: css({
      '& p': {
        color: tokens.gray700,
      },
      color: tokens.colorPrimary,
      borderColor: tokens.colorPrimary,
      '&::after': {
        content: "''",
        backgroundColor: tokens.colorWhite,
        border: `2px solid ${tokens.gray300}`,
        borderRadius: '50%',
      },
    }),
    active: css({
      '&::after': {
        content: 'counter(step)',
        counterIncrement: 'step',
        color: tokens.colorPrimary,
        fontWeight: tokens.fontWeightDemiBold,
        backgroundColor: tokens.colorWhite,
        border: `2px solid ${tokens.colorPrimary}`,
        borderRadius: '50%',
      },
    }),
    activeVertical: css({
      color: tokens.colorPrimary,
      borderColor: tokens.colorPrimary,
    }),
    activeIcon: css({
      borderColor: tokens.colorPrimary,
      '&::after': {
        content: "''",
        backgroundColor: tokens.colorWhite,
        border: `2px solid ${tokens.colorPrimary}`,
        borderRadius: '50%',
      },
    }),
    disabled: css({
      '& p': {
        color: tokens.gray500,
      },
      '&::after': {
        content: 'counter(step)',
        counterIncrement: 'step',
        color: tokens.gray500,
        fontWeight: tokens.fontWeightDemiBold,
        backgroundColor: tokens.colorWhite,
        border: `2px solid ${tokens.gray200}`,
        borderRadius: '50%',
      },
    }),
    disabledVertical: css({
      color: tokens.gray500,
      borderColor: tokens.gray200,
    }),
    disabledIcon: css({
      '& p': {
        color: tokens.gray500,
      },
      '&::after': {
        content: "''",
        backgroundColor: tokens.colorWhite,
        border: `2px solid ${tokens.gray200}`,
        borderRadius: '50%',
      },
    }),
    complete: css({
      '&::after': {
        content: 'counter(step)',
        counterIncrement: 'step',
        color: tokens.colorWhite,
        fontWeight: tokens.fontWeightDemiBold,
      },
    }),
    completeVertical: css({
      color: tokens.colorWhite,
      borderColor: tokens.colorPrimary,
      backgroundColor: tokens.colorPrimary,
    }),
    completeIcon: css({
      '&::after': {
        content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ffffff' viewBox='0 0 250 200'%3E%3Cpath d='M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z'%3E%3C/path%3E%3C/svg%3E")`,
      },
    }),
    error: css({
      '&::after': {
        content: 'counter(step)',
        counterIncrement: 'step',
        color: tokens.colorWhite,
        fontWeight: tokens.fontWeightDemiBold,
        backgroundColor: tokens.colorNegative,
      },
    }),
    errorVertical: css({
      color: tokens.colorWhite,
      borderColor: tokens.colorNegative,
      backgroundColor: tokens.colorNegative,
    }),
    errorIcon: css({
      '&::after': {
        content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ffffff' viewBox='0 0 255 180'%3E%3Cpath d='M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'%3E%3C/path%3E%3C/svg%3E");`,
        backgroundColor: tokens.colorNegative,
      },
    }),
    warning: css({
      '& svg': {
        height: '18px',
      },
      '&::after': {
        content: 'counter(step)',
        counterIncrement: 'step',
        color: tokens.colorWhite,
        fontWeight: tokens.fontWeightDemiBold,
        backgroundColor: tokens.colorWarning,
      },
    }),
    warningVertical: css({
      color: tokens.colorWhite,
      borderColor: tokens.colorWarning,
      backgroundColor: tokens.colorWarning,
      '& svg': {
        height: '18px',
      },
    }),
    warningIcon: css({
      '&::after': {
        content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ffffff' viewBox='0 0 250 200'%3E%3Cpath d='M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundColor: tokens.colorWarning,
      },
    }),
  };
};
