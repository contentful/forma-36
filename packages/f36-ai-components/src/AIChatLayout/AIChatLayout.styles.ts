import tokens from '@contentful/f36-tokens';
import { hexToRGBA } from '@contentful/f36-utils';
import { css } from 'emotion';

import type { AIChatLayoutDisplay } from './AIChatLayout';

interface StyleProps {
  display?: AIChatLayoutDisplay;
  variant?: 'normal' | 'expanded';
  isAnimatingOut?: boolean;
  headerTransitionDirection?: 'left' | 'right' | null;
}

export const getStyles = (props: StyleProps = {}) => {
  const {
    display = 'open',
    variant = 'normal',
    isAnimatingOut = false,
    headerTransitionDirection = null,
  } = props;

  const isOpen = display !== 'collapsed';

  return {
    root: css({
      position: 'fixed',
      bottom: tokens.spacing2Xs,
      right: tokens.spacingXs,
      width: variant === 'expanded' && isOpen ? '985px' : '350px',
      transition: `width ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, transform ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
      transform: isAnimatingOut ? 'translateX(50%)' : 'translateX(0)',
      opacity: isAnimatingOut ? 0 : 1,
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
      alignItems: 'center',
      gap: tokens.spacing2Xs,
      borderBottom: isOpen
        ? `1px solid ${hexToRGBA(tokens.gray900, 0.05)}`
        : '0',
      cursor: display === 'collapsed' ? 'pointer' : 'auto',
      position: 'relative',
      overflow: 'hidden',
    }),

    headerSlideContainer: css({
      display: 'flex',
      alignItems: 'center',
      // overflow: 'hidden',
      width: '100%', // Double width to fit both contents side by side
      minWidth: '0',
      flex: '1',
      transition: `transform 1s ease-out`,
      transform:
        headerTransitionDirection === 'right'
          ? 'translateX(-100%)' // Show the second half (new content)
          : headerTransitionDirection === 'left'
          ? 'translateX(-100%)' // Show the second half (new content)
          : 'translateX(0)', // Show the first half (current content)
    }),

    headerContent: css({
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacing2Xs,
      width: '100%',
      flex: '0 0 auto',
      // opacity: 1,
      // transition: `opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
    }),

    headerContentEntering: css({
      display: 'flex',
      alignItems: 'center',
      gap: tokens.spacing2Xs,
      width: '100%',
      flex: '0 0 auto',
      // opacity: 0,
      // transition: `opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
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
      marginLeft: 'auto',
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
      transition: `opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, transform ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}, width ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
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
      width: '20px',
      height: '20px',
      transition: `transform ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,

      '*': {
        fill: `url("#icon-gradient") rgba(140, 46, 234, 1)`,
      },
    }),
  };
};
