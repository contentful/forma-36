import React from 'react';
import cn from 'classnames';
import ReactModal from 'react-modal';

import { ModalHeader, ModalHeaderProps } from './ModalHeader/ModalHeader';
import { ModalContent, ModalContentProps } from './ModalContent/ModalContent';
import { ModalControls } from './ModalControls/ModalControls';
import styles from './Modal.css';

const ModalSizesMapper = {
  medium: '520px',
  small: '400px',
  large: '700px',
  fullWidth: '100vw',
  zen: '100vw',
};

export type ModalSizeType =
  | 'small'
  | 'medium'
  | 'large'
  | 'fullWidth'
  | 'zen'
  | string
  | number;

export interface ModalProps {
  /**
   * When true, the dialog is shown.
   */
  isShown: boolean;

  /**
   * Function that will be called when the exit is complete.
   */
  onClose: Function;

  /**
   * Function that will be called when the enter is complete.
   */
  onAfterOpen?: Function;
  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick?: boolean;
  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress?: boolean;
  /**
   * Indicating if modal is centered or linked to the top
   */
  position?: 'center' | 'top';
  /**
      Top offset if position is 'top'
    */
  topOffset?: number | string;
  /**
      Modal title that is used in header
    */
  title?: string;
  /**
      Size of the modal window
    */
  size?: ModalSizeType;
  /**
   * Are modals higher than viewport allowed
   */
  allowHeightOverflow?: boolean;

  /**
   * Optional props to override ModalHeader behaviour
   */
  modalHeaderProps?: Partial<ModalHeaderProps>;

  /**
   * Optional props to override ModalContent behaviour
   */
  modalContentProps?: Partial<ModalContentProps>;

  className?: string;
  testId?: string;

  // eslint-disable-next-line
  children: any;
}

export function Modal({
  allowHeightOverflow,
  position,
  shouldCloseOnEscapePress,
  shouldCloseOnOverlayClick,
  size,
  testId,
  topOffset,
  ...otherProps
}: ModalProps): React.ReactElement {
  const allProps = {
    ...otherProps,
    allowHeightOverflow,
    position,
    shouldCloseOnEscapePress,
    shouldCloseOnOverlayClick,
    size,
    testId,
    topOffset,
  };

  const renderDefault = () => {
    return (
      <React.Fragment>
        {otherProps.title && (
          <ModalHeader
            title={otherProps.title}
            onClose={otherProps.onClose}
            {...otherProps.modalHeaderProps}
          />
        )}
        <ModalContent {...otherProps.modalContentProps}>
          {otherProps.children}
        </ModalContent>
      </React.Fragment>
    );
  };

  return (
    <ReactModal
      ariaHideApp={false}
      onRequestClose={otherProps.onClose}
      isOpen={otherProps.isShown}
      onAfterOpen={otherProps.onAfterOpen}
      shouldCloseOnEsc={shouldCloseOnEscapePress}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      portalClassName={styles.Modal__portal}
      className={{
        base: cn(styles.Modal__wrap, {
          [styles['Modal__wrap--zen']]: size === 'zen',
        }),
        afterOpen: styles['Modal__wrap--after-open'],
        beforeClose: styles['Modal__wrap--before-close'],
      }}
      style={{
        content: {
          top: position === 'center' ? 0 : topOffset,
        },
      }}
      overlayClassName={{
        base: cn({
          [styles.Modal__overlay]: true,
          [styles['Modal__overlay--centered']]: position === 'center',
        }),
        afterOpen: styles['Modal__overlay--after-open'],
        beforeClose: styles['Modal__overlay--before-close'],
      }}
      htmlOpenClassName="Modal__html--open"
      bodyOpenClassName="Modal__body--open"
      closeTimeoutMS={300}
    >
      <div
        data-test-id={testId}
        style={{
          width: ModalSizesMapper[size] || size,
        }}
        className={cn(styles.Modal, otherProps.className, {
          [styles['Modal--overflow']]: allowHeightOverflow,
          [styles['Modal--zen']]: size === 'zen',
        })}
      >
        {typeof otherProps.children === 'function'
          ? otherProps.children(allProps)
          : renderDefault()}
      </div>
    </ReactModal>
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Controls = ModalControls;

// Use defaultProps instead of default values in the function to allow the
// Storybook to import and use these values
Modal.defaultProps = {
  allowHeightOverflow: false,
  position: 'center',
  shouldCloseOnEscapePress: true,
  shouldCloseOnOverlayClick: true,
  size: 'medium',
  testId: 'cf-ui-modal',
  topOffset: '50px',
};
