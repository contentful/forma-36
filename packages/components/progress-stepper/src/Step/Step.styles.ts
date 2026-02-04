import { css } from '@emotion/css';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    horizontalListItem: (isBeforeActiveStep: boolean, isActive: boolean) =>
      css({
        margin: 0,
        padding: 0,
        display: 'grid',
        gap: `${tokens.spacingXs} 0`,
        gridTemplateColumns: '1fr 24px 1fr',
        gridTemplateRows: '24px',
        gridTemplateAreas: `
        "divider-before circle divider-after"
        "label label label"
        `,
        '&::before': {
          position: 'relative',
          top: '50%',
          display: 'block',
          content: '""',
          height: '2px',
          backgroundColor:
            isBeforeActiveStep || isActive
              ? tokens.colorPrimary
              : tokens.gray300,
          gridArea: 'divider-before',
          transition: `background-color ${tokens.transitionDurationLong} ${tokens.transitionEasingDefault}`,
        },
        '&::after': {
          position: 'relative',
          top: '50%',
          display: 'block',
          content: '""',
          height: '2px',
          backgroundColor: isBeforeActiveStep
            ? tokens.colorPrimary
            : tokens.gray300,
          transition: `background-color ${tokens.transitionDurationLong} ${tokens.transitionEasingDefault}`,
          gridArea: 'divider-after',
        },
        '&:first-child::before': { visibility: 'hidden' },
        '&:last-child::after': { visibility: 'hidden' },
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
      boxShadow: 'none',
      '&:focus': {
        boxShadow: tokens.glowPrimary,
      },
      '&:focus-visible': {
        boxShadow: tokens.glowPrimary,
      },
      fontWeight: tokens.fontWeightDemiBold,
      color: tokens.gray600,
      '& svg': {
        height: '20px',
      },
      'button&': {
        cursor: 'pointer',
        padding: 0,
      },
      gridArea: 'circle',
    }),
    label: css({
      'button&': {
        padding: 0,
        alignItems: 'flex-start',
        '&:hover': {
          background: 'transparent',
        },
      },
    }),
    horizontalLabel: css({
      gridArea: 'label',
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
    active: css({
      color: tokens.colorPrimary,
      borderColor: tokens.colorPrimary,
    }),
    disabled: css({
      color: tokens.gray500,
      borderColor: tokens.gray200,
    }),
    complete: css({
      color: tokens.colorWhite,
      borderColor: tokens.colorPrimary,
      backgroundColor: tokens.colorPrimary,
    }),
    error: css({
      color: tokens.colorWhite,
      borderColor: tokens.colorNegative,
      backgroundColor: tokens.colorNegative,
    }),
    warning: css({
      color: tokens.colorWhite,
      borderColor: tokens.colorWarning,
      backgroundColor: tokens.colorWarning,
      '& svg': {
        height: '18px',
      },
    }),
  };
};
