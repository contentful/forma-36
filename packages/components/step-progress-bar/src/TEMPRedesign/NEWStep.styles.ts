import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const getStyles = () => {
  return {
    listItem: (isBeforeActiveStep: boolean, isActive: boolean) =>
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
            isBeforeActiveStep || isActive // this ensures that the active line goes to the active circle
              ? tokens.colorPrimary
              : tokens.gray300,
          gridArea: 'divider-before',
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
        gap: `0 ${tokens.spacingXs}`, // adjusted gap spacing
        gridTemplateColumns: '24px 1fr',
        gridTemplateRows: '1fr 24px 1fr',
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
            isBeforeActiveStep || isActive // this ensures that the active line goes to the active circle
              ? tokens.colorPrimary
              : tokens.gray300,
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
      color: tokens.gray300,
      '& svg': {
        height: '20px', // sizing for all other icons
      },
      gridArea: 'circle',
    }),
    label: css({
      gridArea: 'label',
      textAlign: 'center',
    }),
    verticalLabel: css({
      gridArea: 'label',
      textAlign: 'center',
      justifySelf: 'start',
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
      '& svg': {
        height: '18px', // sizing for warning icon
      },
    }),
  };
};
