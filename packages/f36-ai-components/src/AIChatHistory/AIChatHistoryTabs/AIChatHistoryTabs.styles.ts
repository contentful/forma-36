import tokens from '@contentful/f36-tokens';
import { css } from 'emotion';

export const getStyles = () => {
  return {
    tabsContainer: css({
      backgroundColor: tokens.gray100,
      borderRadius: '12px',
      border: `1px solid ${tokens.gray200}`,
      padding: '3px',
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
      padding: '6px 12px',
      cursor: 'pointer',
      borderRadius: '8px',
      color: tokens.gray600,
      fontSize: '14px',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      flex: 1,
      margin: '3px',
      transition: `all ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
      '&:hover': {
        backgroundColor: `rgba(0, 0, 0, 0.04)`,
      },
    }),
    activeTab: css({
      backgroundColor: tokens.colorWhite,
      color: tokens.gray900,
      boxShadow: `0 2px 4px rgba(0, 0, 0, 0.08)`,
    }),
    tabIcon: css({
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      lineHeight: 1,
    }),
    tabCount: css({
      backgroundColor: tokens.gray200,
      color: tokens.gray700,
      borderRadius: tokens.borderRadiusSmall,
      padding: `${tokens.spacing2Xs} ${tokens.spacingXs}`,
      fontSize: tokens.fontSizeS,
      fontWeight: tokens.fontWeightMedium,
      minWidth: '18px',
      textAlign: 'center',
    }),
  };
};
