import tokens from '@contentful/f36-tokens';
import { css, keyframes } from '@emotion/css';

interface StyleProps {
  shouldAnimate?: boolean;
  isExpanded?: boolean;
  testId?: string;
}

const pulseOpacityAndScaleAnimation = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.25);
  }
`;

const pulseOpacityAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const dotsAnimation = keyframes`
  0%, 100% {
    content: '';
  }
  25% {
    content: '.';
  }
  50% {
    content: '..';
  }
  75% {
    content: '...';
  }
`;

export const getStyles = (props: StyleProps = {}) => {
  const { shouldAnimate = true, isExpanded = false, testId } = props;

  return {
    root: css({
      width: '100%',
      borderRadius: tokens.borderRadiusSmall,
      transition: `all ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    }),

    header: css({
      display: 'flex',
      alignItems: 'center',
      padding: isExpanded
        ? `${tokens.spacingS} ${tokens.spacingS} ${tokens.spacingXs}`
        : `${tokens.spacingS}`,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      border: 'none',
      width: '100%',
      borderRadius: tokens.borderRadiusSmall,
      transition: `background-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      '&:hover': {
        [`& #${testId}-collapsed-icon`]: {
          opacity: 0,
          transition: `opacity 150ms ease-out`,
          animation: 'none',
        },
        [`& #${testId}-hover-icon`]: {
          opacity: shouldAnimate && !isExpanded ? 1 : 0,
          transition: `opacity 150ms ease-in 50ms`,
          animation:
            shouldAnimate && !isExpanded
              ? `${pulseOpacityAnimation} 1.2s ease-in-out 200ms infinite`
              : 'none',
        },
      },
    }),

    iconContainer: css({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: tokens.spacingXs,
      color: tokens.gray700,
      width: '16px',
      height: '16px',
      flexShrink: 0,

      '& svg': {
        width: '16px',
        height: '16px',
      },
    }),

    collapsedIcon: css({
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isExpanded ? 0 : 1,
      transition: `opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      animation:
        shouldAnimate && !isExpanded
          ? `${pulseOpacityAndScaleAnimation} 1.5s ease-in-out infinite`
          : 'none',
    }),

    hoverIcon: css({
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: `opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      animation: 'none',
    }),

    expandedIcon: css({
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isExpanded ? 1 : 0,
      transition: `opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    }),

    label: css({
      flex: 1,
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightNormal,
      color: tokens.gray500,
      textAlign: 'left',
      lineHeight: tokens.lineHeightDefault,
    }),

    labelWithAnimatedDots: css({
      flex: 1,
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightNormal,
      color: tokens.gray500,
      textAlign: 'left',
      lineHeight: tokens.lineHeightDefault,
      position: 'relative',
      '::after': {
        content: '"..."',
        animation: `${dotsAnimation} 3.6s infinite steps(1, end)`,
      },
    }),

    labelWithStaticDots: css({
      flex: 1,
      fontSize: tokens.fontSizeM,
      fontWeight: tokens.fontWeightNormal,
      color: tokens.gray500,
      textAlign: 'left',
      lineHeight: tokens.lineHeightDefault,
      position: 'relative',
      '::after': {
        content: '"..."',
      },
    }),

    content: css({
      padding: `0 ${tokens.spacingM} 0`,
      backgroundColor: tokens.colorWhite,
      lineHeight: tokens.lineHeightDefault,
      marginLeft: '1.25rem',
      borderLeft: `1px solid ${tokens.gray200}`,

      ' & p, & span': {
        color: tokens.gray500,
        fontSize: '12px',
        marginBottom: tokens.spacingXs,
      },

      '& *:last-child': {
        marginBottom: 0,
      },
    }),
  };
};
