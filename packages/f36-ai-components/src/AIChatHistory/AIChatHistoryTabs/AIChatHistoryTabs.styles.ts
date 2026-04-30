import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export const getStyles = () => {
  return {
    tabsContainer: css({
      backgroundColor: tokens.gray100,
      borderRadius: tokens.borderRadiusMedium,
      padding: '2px',
    }),
    tabsList: css({
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: 0,
    }),
    tabContainer: css({
      flex: 1,
    }),
    tab: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: tokens.spacing2Xs,
      width: '100%',
      background: 'none',
      border: 'none',
      margin: '0',
      padding: '6px 0',
      cursor: 'pointer',
      borderRadius: tokens.borderRadiusMedium,
      transition: `background-color ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      span: {
        color: tokens.gray600,
        fontSize: tokens.fontSizeS,
        fontWeight: tokens.fontWeightMedium,
        lineHeight: tokens.lineHeightS,
      },
      '&:hover': {
        backgroundColor: tokens.gray200,
      },
      '&:focus-visible': {
        outline: `2px solid ${tokens.blue600}`,
        outlineOffset: '-2px',
      },
    }),
    activeTab: css({
      backgroundColor: tokens.colorWhite,
      boxShadow: `0px 1px 0px 0px rgba(17, 27, 43, 0.05)`,

      span: {
        color: tokens.gray900,
      },

      '&:hover': {
        backgroundColor: tokens.colorWhite,
        boxShadow: `0px 1px 0px 0px rgba(17, 27, 43, 0.01)`,
      },
    }),
    tabIcon: css({
      display: 'flex',
      width: '16px',
      height: '16px',
      alignItems: 'center',
      fontSize: '14px',
      lineHeight: 1,
      color: tokens.gray600,
    }),
    activeTabIcon: css({
      color: tokens.gray900,
    }),
  };
};
