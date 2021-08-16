import React from 'react';

import { Modal, ModalProps } from '../Modal';
import type { ModalSizeType } from '../types';
import type { ModalHeaderProps } from '../ModalHeader/ModalHeader';
import type { ModalContentProps } from '../ModalContent/ModalContent';
import type { ModalControlsProps } from '../ModalControls/ModalControls';
import { Button } from '@contentful/f36-button';

export interface ModalConfirmProps {
  /**
   * When true, the dialog is shown.
   */
  isShown: boolean;
  /**
   * Function that will be called when the confirm button is clicked. This does not close the ModalConfirm.
   */
  onConfirm(): void;
  /**
   * Function that will be called when the cancel button is clicked. This does not close the ModalConfirm.
   */
  onCancel: ModalProps['onClose'];
  /**
      Modal title that is used in header
    */
  title?: string;
  /**
   * Label of the confirm button
   */
  confirmLabel?: string | false;
  /**
   * Label of the cancel button
   */
  cancelLabel?: string | false;
  /**
   * The intent of the ModalConfirm. Used for the Button.
   */
  intent?: 'primary' | 'positive' | 'negative';
  /**
      Size of the modal window
    */
  size?: ModalSizeType;
  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick?: boolean;
  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress?: boolean;
  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled?: boolean;
  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading?: boolean;
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

  /**
   * Optional props to override ModalControl behaviour
   */
  modalControlsProps?: Partial<ModalControlsProps>;

  /**
   * Optional property to set initial focus
   */
  initialFocusRef?: React.RefObject<HTMLElement>;

  testId?: string;
  confirmTestId?: string;
  cancelTestId?: string;
  children: React.ReactNode;
}

export function ModalConfirm({
  allowHeightOverflow = false,
  cancelLabel = 'Cancel',
  cancelTestId = 'cf-ui-modal-confirm-cancel-button',
  children,
  confirmLabel = 'Confirm',
  confirmTestId = 'cf-ui-modal-confirm-confirm-button',
  intent = 'positive',
  isConfirmDisabled = false,
  isConfirmLoading = false,
  isShown,
  modalContentProps,
  modalControlsProps,
  modalHeaderProps,
  onCancel,
  onConfirm,
  shouldCloseOnEscapePress = true,
  shouldCloseOnOverlayClick = true,
  size = 'medium',
  testId = 'cf-ui-modal-confirm',
  title = 'Are you sure?',
  initialFocusRef,
}: ModalConfirmProps) {
  const cancelRef = React.useRef(null);

  const confirmButton = confirmLabel ? (
    <Button
      testId={confirmTestId}
      isDisabled={isConfirmDisabled}
      isLoading={isConfirmLoading}
      variant={intent}
      size="small"
      onClick={() => onConfirm()}
    >
      {confirmLabel}
    </Button>
  ) : null;

  const cancelButton = cancelLabel ? (
    <Button
      testId={cancelTestId}
      variant="secondary"
      onClick={onCancel}
      size="small"
      ref={initialFocusRef || cancelRef}
    >
      {cancelLabel}
    </Button>
  ) : null;

  return (
    <Modal
      testId={testId}
      isShown={isShown}
      onClose={onCancel}
      size={size}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscapePress={shouldCloseOnEscapePress}
      allowHeightOverflow={allowHeightOverflow}
      initialFocusRef={cancelRef}
    >
      {() => {
        return (
          <>
            <Modal.Header title={title || ''} {...modalHeaderProps} />
            <Modal.Content {...modalContentProps}>{children}</Modal.Content>
            <Modal.Controls {...modalControlsProps}>
              {cancelButton}
              {confirmButton}
            </Modal.Controls>
          </>
        );
      }}
    </Modal>
  );
}
