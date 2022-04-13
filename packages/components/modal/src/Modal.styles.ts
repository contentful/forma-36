import tokens from '@contentful/f36-tokens';
import { css, cx } from 'emotion';
import type { ModalPositionType, ModalSizeType } from './types';

export function getModalStyles(props: {
  size: ModalSizeType;
  position: ModalPositionType;
  allowHeightOverflow?: boolean;
  className?: string;
}) {
  const modal = cx(
    css({
      margin: tokens.spacing2Xl,
      backgroundColor: tokens.colorWhite,
      borderRadius: tokens.borderRadiusMedium,
      boxShadow: tokens.boxShadowHeavy,
      maxHeight: `calc(100vh - 1rem * (100 / ${tokens.fontBaseDefault}))`,
      maxWidth: `calc(100vw - 1rem * (100 / ${tokens.fontBaseDefault}))`,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }),
    props.allowHeightOverflow
      ? css({
          overflow: 'auto',
          maxHeight: 'none',
        })
      : null,
    props.size === 'zen'
      ? css({
          maxWidth: 'none',
          maxHeight: 'none',
          margin: 0,
          height: '100%',
          width: '100%',
        })
      : null,
    props.className,
  );

  return {
    modal,
    portal: css({
      display: 'block',
    }),
    base: {
      root: cx(
        css({
          zIndex: tokens.zIndexModalContent,
          position: 'relative',
          padding: 0,
          display: 'inline-block',
          margin: '0 auto',
          textAlign: 'left',
          outline: 'none',
          transform: 'scale(0.85)',
          transition: `transform ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
        }),
        props.size === 'zen'
          ? css({
              width: '100%',
              height: '100%',
            })
          : null,
      ),
      afterOpen: css({
        transform: 'scale(1)',
      }),
      beforeClose: css({
        transform: 'scale(0.85)',
      }),
    },
    modalOverlay: {
      root: cx(
        css({
          display: 'flex',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: tokens.zIndexModal,
          opacity: 0,
          transition: `opacity ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault}`,
          position: 'fixed',
          overflowY: 'auto',
          backgroundColor: 'rgba(12, 20, 28, 0.74902)',
          textAlign: 'center',
        }),
        props.position === 'center'
          ? css({
              alignItems: 'center',
              justifyContent: 'center',
            })
          : null,
      ),
      afterOpen: css({
        opacity: 1,
      }),
      beforeClose: css({
        opacity: 0,
      }),
    },
  };
}
