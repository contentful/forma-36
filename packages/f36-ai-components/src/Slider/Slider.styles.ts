import tokens from '@contentful/f36-tokens';
import { css, keyframes } from 'emotion';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

interface StyleProps {
  isTransitioning?: boolean;
  transitionDirection?: 'left' | 'right' | null;
  duration?: number;
}

export const getStyles = (props: StyleProps = {}) => {
  const {
    isTransitioning = false,
    transitionDirection = null,
    duration = 1000,
  } = props;

  return {
    root: css({
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
    }),

    slideContainer: css({
      display: 'flex',
      flexDirection: transitionDirection === 'left' ? 'row' : 'row-reverse',
      alignItems: 'center',
      width: '100%', // Double width to fit both contents side by side
      height: '100%',
      transition: `transform ${duration}ms ease-out`,
      transform:
        transitionDirection === 'right'
          ? 'translateX(100%)' // Show the second half (new content)
          : transitionDirection === 'left'
          ? 'translateX(-100%)' // Show the second half (new content)
          : 'translateX(0)', // Show the first half (current content)
    }),

    contentSlot: css({
      display: 'flex',
      alignItems: 'center',
      width: '100%', // Each content slot takes half of the slide container
      height: '100%',
      flex: '0 0 auto',
      opacity: 1,
      animation: isTransitioning
        ? `${fadeOut} ${duration}ms ${tokens.transitionEasingDefault}`
        : 'none',

      '&:last-child': {
        animation: isTransitioning
          ? `${fadeIn} ${duration}ms ${tokens.transitionEasingDefault}`
          : 'none',
      },
    }),

    staticContent: css({
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      opacity: 1,
    }),
  };
};
