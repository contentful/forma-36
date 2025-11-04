import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getStyles = () => {
  return {
    tabsContainer: css({
      backgroundColor: tokens.gray100,
      borderRadius: '6px',
      padding: '2px',
      marginBottom: '12px',
    }),
    tabsList: css({
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: 0,
    }),
    tab: css({
      background: 'none',
      border: 'none',
      minWidth: '103.33px',
      padding: '6px 0',
      cursor: 'pointer',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px',
      flex: 1,
      margin: '0',
      transition: `all ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      span: {
        color: tokens.gray600,
        fontSize: '12px',
        fontWeight: tokens.fontWeightMedium,
        lineHeight: tokens.lineHeightS,
      },
      '&:hover': {
        backgroundColor: tokens.gray200,
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
    }),
  };
};
