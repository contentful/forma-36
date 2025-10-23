import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';
import { css } from 'emotion';

interface StyleProps {
  type?: 'collapsed' | 'normal' | 'expanded';
  isOpen?: boolean;
}

export const getStyles = (props: StyleProps = {}) => {
  const { type = 'normal', isOpen = true } = props;

  return {
    root: css({
      width: type === 'expanded' ? '985px' : '350px',
      transition: `width ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      backgroundColor: tokens.colorWhite,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: isOpen ? 'flex-start' : 'center',
      alignItems: 'flex-start',
      overflow: 'hidden',
      boxShadow: tokens.boxShadowHeavy,
      borderRadius: '16px',
    }),

    header: css({
      width: '100%',
      height: '48px',
      padding: `0px ${tokens.spacingS}`,
      backgroundColor: 'transparent',
      flexShrink: 0,
      gap: tokens.spacing2Xs,
      borderBottom: isOpen
        ? `1px solid ${hexToRGBA(tokens.gray900, 0.05)}`
        : '0',
      cursor: !isOpen ? 'pointer' : 'auto',
    }),

    icon: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      paddingLeft: tokens.spacingXs,
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
      flexShrink: 0,
      justifyContent: 'flex-end',
      position: 'relative',
    }),

    buttonIcon: css({
      filter: `drop-shadow(0px 1px 0px ${hexToRGBA(tokens.gray900, 0.05)})`,
    }),

    buttonVisible: css({
      opacity: 1,
      transform: 'translateX(0) scale(1)',
      transition: `opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, transform ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      transitionDelay: 'var(--button-delay, 0ms)',
      pointerEvents: 'auto',
      marginLeft: tokens.spacing2Xs,
      outline: 'none',
      border: 'none',
      boxShadow: 'none',
      '&:first-child': {
        marginLeft: '0',
      },
    }),

    buttonHidden: css({
      opacity: 0,
      transform: 'translateX(4px) scale(0.95)',
      transition: `opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, transform ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, width ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`, // Match Button component transitions + width
      transitionDelay: 'var(--button-delay, 0ms)',
      pointerEvents: 'none',
      width: '0',
      minWidth: '0',
      maxWidth: '0',
      margin: '0',
      padding: '0',
      border: 'none',
      overflow: 'hidden',
    }),

    content: css({
      flex: 1,
      height: '720px',
      padding: tokens.spacingM,
      overflow: 'auto',
      backgroundColor: tokens.colorWhite,
    }),

    aiGradientIcon: css({
      width: isOpen ? '16px' : '20px',
      height: isOpen ? '16px' : '20px',
      transition: `width ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, height ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,

      '*': {
        fill: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><linearGradient id='grad' gradientTransform='rotate(46.64 .5 .5)' gradientUnits='objectBoundingBox'><stop offset='19.41%' stop-color='%231872E5'/><stop offset='38.04%' stop-color='%238C2EEA'/><stop offset='56.68%' stop-color='%23E65325'/><stop offset='75.31%' stop-color='%23EAAF09'/></linearGradient></svg>#grad") rgba(140, 46, 234, 1)`,
      },
    }),
  };
};
