import tokens from '@contentful/f36-tokens';
import boxShadows from '@contentful/f36-tokens/src/tokens/box-shadows/box-shadows';
import { css } from 'emotion';

interface StyleProps {
  type?: 'collapsed' | 'normal' | 'expanded';
}

export const getStyles = (props: StyleProps = {}) => {
  const { type = 'normal' } = props;

  const getLayoutWidth = () => {
    switch (type) {
      case 'collapsed':
        return '350px';
      case 'expanded':
        return '480px';
      case 'normal':
      default:
        return '360px';
    }
  };

  const getLayoutPosition = () => {
    return {
      position: 'relative' as const,
      height: type === 'collapsed' ? 'auto' : '100%', // Auto height for collapsed
    };
  };

  const getCollapsedStyles = () => {
    if (type === 'collapsed') {
      return {
        padding: '14px 12px 14px 20px', // todo: replace with tokens?
        borderRadius: '16px', // todo: replace with tokens?
        boxShadow: boxShadows['box-shadow-heavy'],
        height: '48px',
        flexDirection: 'row' as const,
        gap: tokens.spacing2Xs,
      };
    }
    return {
      flexDirection: 'column' as const,
    };
  };

  return {
    root: css({
      width: getLayoutWidth(),
      backgroundColor: tokens.colorWhite,
      borderRadius: tokens.borderRadiusMedium,
      display: 'flex',
      overflow: 'hidden',
      ...getLayoutPosition(),
      ...getCollapsedStyles(),
    }),

    header: css({
      display: 'flex',
      alignItems: 'center',
      padding: type === 'collapsed' ? '0' : tokens.spacingS, // No extra padding for collapsed
      borderBottom:
        type === 'collapsed' ? 'none' : `1px solid ${tokens.gray300}`, // No border for collapsed
      backgroundColor: type === 'collapsed' ? 'transparent' : tokens.gray100, // No background for collapsed
      flexShrink: 0,
      gap: tokens.spacingXs,
    }),

    icon: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }),

    title: css({
      flex: type === 'collapsed' ? '0 1 auto' : 1, // Don't grow in collapsed mode
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightMedium,
      color: tokens.gray900,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }),

    buttonGroup: css({
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacingXs,
      flexShrink: 0,
      marginLeft: 'auto',
    }),

    buttonIcon: css({
      filter: 'drop-shadow(0px 1px 0px rgba(17, 27, 43, 0.05))',
    }),

    content: css({
      flex: 1,
      padding: tokens.spacingM,
      overflow: 'auto',
      backgroundColor: tokens.colorWhite,
    }),

    aiGradientIcon: css({
      fill: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><linearGradient id='grad' gradientTransform='rotate(46.64 .5 .5)' gradientUnits='objectBoundingBox'><stop offset='19.41%' stop-color='%231872E5'/><stop offset='38.04%' stop-color='%238C2EEA'/><stop offset='56.68%' stop-color='%23E65325'/><stop offset='75.31%' stop-color='%23EAAF09'/></linearGradient></svg>#grad") rgba(140, 46, 234, 1)`,
    }),
  };
};
