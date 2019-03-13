import React, { Component } from 'react';

import Modal, { ModalSizeType } from '../Modal/Modal';
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
   * Function that will be called when the cancel button is clicked. This does not close the ModalConfirm.
   */
  onCancel: Function;
  /**
      Modal title that is used in header
    */
  title?: React.ReactNode;
  /**
   * Label of the confirm button
   */
  confirmLabel?: string;
  /**
   * Label of the cancel button
   */
  cancelLabel?: string;
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
  testId?: string;
  confirmTestId?: string;
  cancelTestId?: string;
  children: React.ReactNode;
}

export class ModalConfirm extends Component<ModalConfirmProps> {
  static defaultProps = {
    testId: 'cf-ui-modal-confirm',
    confirmTestId: 'cf-ui-modal-confirm-confirm-button',
    cancelTestId: 'cf-ui-modal-confirm-cancel-button',
    title: 'Are you sure?',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    intent: 'positive',
    shouldCloseOnOverlayClick: true,
    shouldCloseOnEscapePress: true,
    isConfirmDisabled: false,
    isConfirmLoading: false,
    size: 'medium',
  };

  render() {
    const {
      children,
      testId,
      isShown,
      title,
      onConfirm,
      onCancel,
      size,
      confirmLabel,
      cancelLabel,
      intent,
      shouldCloseOnOverlayClick,
      shouldCloseOnEscapePress,
      isConfirmDisabled,
      isConfirmLoading,
      confirmTestId,
      cancelTestId,
    } = this.props;

    return (
      <Modal
        testId={testId}
        isShown={isShown}
        onClose={onCancel}
        size={size}
        shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
        shouldCloseOnEscapePress={shouldCloseOnEscapePress}
      >
        {() => (
          <div>
            <Modal.Header title={title} />
            <Modal.Content>{children}</Modal.Content>
            <Modal.Controls>
              <Button
                testId={confirmTestId}
                disabled={isConfirmDisabled}
                loading={isConfirmLoading}
                buttonType={intent}
                onClick={() => onConfirm()}
              >
                {confirmLabel}
              </Button>
              <Button
                testId={cancelTestId}
                buttonType="muted"
                onClick={() => onCancel()}
              >
                {cancelLabel}
              </Button>
            </Modal.Controls>
          </div>
        )}
      </Modal>
    );
  }
}

export default ModalConfirm;
