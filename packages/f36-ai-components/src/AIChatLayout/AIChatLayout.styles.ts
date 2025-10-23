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
      case 'expanded':
        return '985px';
      default:
        return '350px';
    }
  };

  return {
    root: css({
      width: getLayoutWidth(),
      transition: `width ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      backgroundColor: tokens.colorWhite,
      display: 'flex',
      overflow: 'hidden',
      boxShadow: boxShadows['box-shadow-heavy'],
      borderRadius: '16px', // todo: replace with tokens?
    }),

    header: css({
      width: '100%',
      height: '48px',
      padding: '0px 12px 0px 20px', // todo: replace with tokens?
      backgroundColor: 'transparent',
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
      flex: '1 1 auto',
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
