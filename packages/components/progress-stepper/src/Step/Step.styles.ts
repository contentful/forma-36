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
          //for numbered steps
          content: 'counter(step)',
          counterIncrement: 'step',

          // for icon steps
          // content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M232,104a56.06,56.06,0,0,0-56-56H136a24,24,0,0,1,24-24,8,8,0,0,0,0-16,40,40,0,0,0-40,40H80a56.06,56.06,0,0,0-56,56,16,16,0,0,0,8,13.83V128c0,35.53,33.12,62.12,59.74,83.49C103.66,221.07,120,234.18,120,240a8,8,0,0,0,16,0c0-5.82,16.34-18.93,28.26-28.51C190.88,190.12,224,163.53,224,128V117.83A16,16,0,0,0,232,104ZM80,64h96a40.06,40.06,0,0,1,40,40H40A40,40,0,0,1,80,64Zm74.25,135c-10.62,8.52-20,16-26.25,23.37-6.25-7.32-15.63-14.85-26.25-23.37C77.8,179.79,48,155.86,48,128v-8H208v8C208,155.86,178.2,179.79,154.25,199Z'%3E%3C/path%3E%3C/svg%3E")`,
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
    warningIcon: css({
      '&::after': {
        content: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ffffff' viewBox='0 0 250 200'%3E%3Cpath d='M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z'%3E%3C/path%3E%3C/svg%3E")`,
        backgroundColor: tokens.colorWarning,
      },
    }),
  };
};
