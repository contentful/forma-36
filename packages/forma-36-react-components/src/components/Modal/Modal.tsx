import React from 'react';
import cn from 'classnames';
import ReactModal from 'react-modal';

import ModalHeader, { ModalHeaderProps } from './ModalHeader';
import ModalContent, { ModalContentProps } from './ModalContent';
import ModalControls from './ModalControls/ModalControls';
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
   * Boolean indicating if modal is centered
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

export function Modal(props: ModalProps): React.ReactElement {
  const renderDefault = () => {
    return (
      <React.Fragment>
        {props.title && (
          <ModalHeader
            title={props.title}
            onClose={props.onClose}
            {...props.modalHeaderProps}
          />
        )}
        <ModalContent {...props.modalContentProps}>
          {props.children}
        </ModalContent>
      </React.Fragment>
    );
  };

  return (
    <ReactModal
      ariaHideApp={false}
      onRequestClose={props.onClose}
      isOpen={props.isShown}
      onAfterOpen={props.onAfterOpen}
      shouldCloseOnEsc={props.shouldCloseOnEscapePress}
      shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
      portalClassName={styles.Modal__portal}
      className={{
        base: cn(styles.Modal__wrap, {
          [styles['Modal__wrap--zen']]: props.size === 'zen',
        }),
        afterOpen: styles['Modal__wrap--after-open'],
        beforeClose: styles['Modal__wrap--before-close'],
      }}
      style={{
        content: {
          top: props.position === 'center' ? 0 : props.topOffset,
        },
      }}
      overlayClassName={{
        base: cn({
          [styles.Modal__overlay]: true,
          [styles['Modal__overlay--centered']]: props.position === 'center',
        }),
        afterOpen: styles['Modal__overlay--after-open'],
        beforeClose: styles['Modal__overlay--before-close'],
      }}
      htmlOpenClassName="Modal__html--open"
      bodyOpenClassName="Modal__body--open"
      closeTimeoutMS={300}
    >
      <div
        data-test-id={props.testId}
        style={{
          width: ModalSizesMapper[props.size!] || props.size, // eslint-disable-line @typescript-eslint/no-non-null-assertion
        }}
        className={cn(styles.Modal, props.className, {
          [styles['Modal--overflow']]: props.allowHeightOverflow,
          [styles['Modal--zen']]: props.size === 'zen',
        })}
      >
        {typeof props.children === 'function'
          ? props.children(props)
          : renderDefault()}
      </div>
    </ReactModal>
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Controls = ModalControls;

Modal.defaultProps = {
  shouldCloseOnEscapePress: true,
  shouldCloseOnOverlayClick: true,
  position: 'center',
  testId: 'cf-ui-modal',
  topOffset: '50px',
  size: 'medium',
  allowHeightOverflow: false,
};

export default Modal;
