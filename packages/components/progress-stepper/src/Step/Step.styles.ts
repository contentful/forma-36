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
        minWidth: '4rem',

        '&::before': {
          gridColumnStart: 1,
          gridRowStart: 1,
          height: '0.5rem',
          width: '100%',
          content: '""',
          marginInlineStart: '-100%',
          backgroundColor: tokens.gray300,
        },

        '&::after': {
          // for numbered steps
          // content: 'counter(step)',
          // counterIncrement: 'step',

          // for icon steps
          content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.83V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.83A16,16,0,0,0,232,104ZM80,64h96a40.06,40.06,0,0,1,40,40H40A40,40,0,0,1,80,64Zm74.25,135c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z'%3E%3C/path%3E%3C/svg%3E")`,
          zIndex: 1,
          position: 'relative',
          gridColumnStart: 1,
          gridRowStart: 1,
          display: 'grid',
          height: '2rem',
          width: '2rem',
          placeItems: 'center',
          placeSelf: 'center',
          borderRadius: '9999px',
          backgroundColor: tokens.colorPrimary,
        },
        // margin: 0,
        // padding: 0,
        // display: 'grid',
        // // gap: `${tokens.spacingXs} 0`, // this adds an awkward height that is difficult to align with other components
        // gridTemplateColumns: '0.25fr 1fr 24px 1fr 0.25fr',
        // gridTemplateRows: '24px',
        // gridTemplateAreas: `
        // "divider-before divider-before circle divider-after divider-after"
        // ". label label label ."
        // `,
        // '&::before': {
        //   position: 'relative',
        //   top: '50%',
        //   display: 'block',
        //   content: '""',
        //   height: '2px',
        //   backgroundColor:
        //     isBeforeActiveStep || isActive
        //       ? tokens.colorPrimary
        //       : tokens.gray300,
        //   gridArea: 'divider-before',
        //   transition: `background-color ${tokens.transitionDurationLong} ${tokens.transitionEasingDefault}`,
        // },
        // '&::after': {
        //   position: 'relative',
        //   top: '50%',
        //   display: 'block',
        //   content: '""',
        //   height: '2px',
        //   backgroundColor: isBeforeActiveStep
        //     ? tokens.colorPrimary
        //     : tokens.gray300,
        //   transition: `background-color ${tokens.transitionDurationLong} ${tokens.transitionEasingDefault}`,
        //   gridArea: 'divider-after',
        // },
        // '&:first-child::before': { visibility: 'hidden' },
        // '&:last-child::after': { visibility: 'hidden' },
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
