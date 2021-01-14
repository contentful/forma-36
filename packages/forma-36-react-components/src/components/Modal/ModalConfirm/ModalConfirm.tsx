import React from 'react';

import Modal from '../Modal';
import type { ModalSizeType } from '../Modal';
import { ModalHeaderProps } from '../ModalHeader';
import { ModalContentProps } from '../ModalContent';
import { ModalControlsProps } from '../ModalControls';
import Button from '../../Button';

export interface ModalConfirmProps {
  /**
   * When true, the dialog is shown.
   */
  isShown: boolean;
  /**
   * Function that will be called when the confirm button is clicked. This does not close the ModalConfirm.
   */
  onConfirm: Function;
  /**
   * Function that will be called when the secondary button is clicked. This does not close the ModalConfirm.
   */
  onSecondary?: Function;
  /**
   * Function that will be called when the cancel button is clicked. This does not close the ModalConfirm.
   */
  onCancel: Function;
  /**
      Modal title that is used in header
    */
  title?: string;
  /**
   * Label of the confirm button
   */
  confirmLabel?: string | false;
  /**
   * Label of the secondary button
   */
  secondaryLabel?: string | false;
  /**
   * Label of the cancel button
   */
  cancelLabel?: string | false;
  /**
   * The intent of the ModalConfirm. Used for the Button.
   */
  intent?: 'primary' | 'positive' | 'negative';
  /**
   * The intent of the ModalConfirm. Used for the secondary Button.
   */
  secondaryIntent?: 'primary' | 'positive' | 'negative' | 'muted';
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
   * When true, the secondary button is set to disabled.
   */
  isSecondaryDisabled?: boolean;
  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading?: boolean;
  /**
   * When true, the secondary button is set to loading.
   */
  isSecondaryLoading?: boolean;
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

  testId?: string;
  confirmTestId?: string;
  secondaryTestId?: string;
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
  isSecondaryDisabled,
  isSecondaryLoading,
  isShown,
  modalContentProps,
  modalControlsProps,
  modalHeaderProps,
  onCancel,
  onConfirm,
  onSecondary,
  secondaryIntent,
  secondaryLabel,
  secondaryTestId = 'cf-ui-modal-confirm-secondary-button',
  shouldCloseOnEscapePress = true,
  shouldCloseOnOverlayClick = true,
  size = 'medium',
  testId = 'cf-ui-modal-confirm',
  title = 'Are you sure?',
}: ModalConfirmProps): React.ReactElement {
  const confirmButton = confirmLabel ? (
    <Button
      testId={confirmTestId}
      disabled={isConfirmDisabled}
      loading={isConfirmLoading}
      buttonType={intent}
      onClick={() => onConfirm()}
    >
      {confirmLabel}
    </Button>
  ) : null;

  const secondaryButton = secondaryLabel ? (
    <Button
      testId={secondaryTestId}
      disabled={isSecondaryDisabled}
      loading={isSecondaryLoading}
      buttonType={secondaryIntent}
      onClick={() => onSecondary && onSecondary()}
    >
      {secondaryLabel}
    </Button>
  ) : null;

  const cancelButton = cancelLabel ? (
    <Button testId={cancelTestId} buttonType="muted" onClick={() => onCancel()}>
      {cancelLabel}
    </Button>
  ) : null;

  let buttons = (
    <>
      {confirmButton}
      {secondaryButton}
      {cancelButton}
    </>
  );

  if (modalControlsProps && modalControlsProps.position === 'right') {
    buttons = (
      <>
        {cancelButton}
        {secondaryButton}
        {confirmButton}
      </>
    );
  }
  return (
    <Modal
      testId={testId}
      isShown={isShown}
      onClose={onCancel}
      size={size}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscapePress={shouldCloseOnEscapePress}
      allowHeightOverflow={allowHeightOverflow}
    >
      {() => (
        <div>
          <Modal.Header title={title || ''} {...modalHeaderProps} />
          <Modal.Content {...modalContentProps}>{children}</Modal.Content>
          <Modal.Controls {...modalControlsProps}>{buttons}</Modal.Controls>
        </div>
      )}
    </Modal>
  );
}

export default ModalConfirm;
