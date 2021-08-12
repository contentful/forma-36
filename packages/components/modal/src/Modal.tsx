import React from 'react';
import ReactModal from 'react-modal';

import { Box } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

import { ModalHeader, ModalHeaderProps } from './ModalHeader/ModalHeader';
import { ModalContent, ModalContentProps } from './ModalContent/ModalContent';
import { ModalControls } from './ModalControls/ModalControls';
import { getModalStyles } from './Modal.styles';
import type { ModalSizeType, ModalPositionType } from './types';

const ModalSizesMapper = {
  medium: '520px',
  small: '400px',
  large: '700px',
  fullWidth: '100vw',
  zen: '100vw',
};

export interface ModalProps extends CommonProps {
  /**
   * When true, the dialog is shown.
   */
  isShown: boolean;

  /**
   * Function that will be run when the modal is requested to be closed, prior to actually closing.
   */
  onClose: ReactModal.Props['onRequestClose'];

  /**
   * Function that will be run after the modal has opened.
   */
  onAfterOpen?: ReactModal.Props['onAfterOpen'];

  /**
   * Additional aria attributes
   */
  aria?: ReactModal.Props['aria'];

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
  position?: ModalPositionType;
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

  children: React.ReactNode | RenderModal;
}

type RenderModal = (modalProps: ModalProps) => React.ReactNode;

export function Modal({
  allowHeightOverflow,
  position,
  shouldCloseOnEscapePress,
  shouldCloseOnOverlayClick,
  size,
  testId,
  topOffset,
  aria,
  ...otherProps
}: ModalProps) {
  const props = {
    ...otherProps,
    allowHeightOverflow,
    position,
    shouldCloseOnEscapePress,
    shouldCloseOnOverlayClick,
    size,
    testId,
    topOffset,
  };

  const styles = getModalStyles({
    position,
    size,
    allowHeightOverflow,
    className: otherProps.className,
  });

  const renderDefault = () => {
    return (
      <React.Fragment>
        {otherProps.title && (
          <ModalHeader
            title={otherProps.title}
            onClose={props.onClose}
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
      aria={aria}
      onRequestClose={props.onClose}
      isOpen={otherProps.isShown}
      onAfterOpen={props.onAfterOpen}
      shouldCloseOnEsc={shouldCloseOnEscapePress}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      portalClassName={styles.portal}
      className={{
        base: styles.base.root,
        afterOpen: styles.base.afterOpen,
        beforeClose: styles.base.beforeClose,
      }}
      style={{
        content: {
          top: position === 'center' ? 0 : topOffset,
        },
      }}
      overlayClassName={{
        base: styles.modalOverlay.root,
        afterOpen: styles.modalOverlay.afterOpen,
        beforeClose: styles.modalOverlay.beforeClose,
      }}
      closeTimeoutMS={300}
    >
      <Box
        testId={testId}
        style={{
          width: ModalSizesMapper[size] || size,
        }}
        className={styles.modal}
        data-modal-root
      >
        {typeof otherProps.children === 'function'
          ? otherProps.children(props)
          : renderDefault()}
      </Box>
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
