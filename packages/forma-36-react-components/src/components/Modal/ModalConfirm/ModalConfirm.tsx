import React, { Component } from 'react';

import Modal, { ModalSizeType } from '../Modal/Modal';
import { ModalHeaderProps } from '../ModalHeader/ModalHeader';
import { ModalContentProps } from '../ModalContent/ModalContent';
import { ModalControlsProps } from '../ModalControls/ModalControls';
import Button from '../../Button';

export type ModalConfirmProps = {
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
  secondaryIntent?: 'primary' | 'positive' | 'negative';
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
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-modal-confirm',
  confirmTestId: 'cf-ui-modal-confirm-confirm-button',
  secondaryTestId: 'cf-ui-modal-confirm-secondary-button',
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
  allowHeightOverflow: false,
};

export class ModalConfirm extends Component<ModalConfirmProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      children,
      testId,
      isShown,
      title,
      onConfirm,
      onSecondary,
      onCancel,
      size,
      confirmLabel,
      secondaryLabel,
      cancelLabel,
      intent,
      secondaryIntent,
      shouldCloseOnOverlayClick,
      shouldCloseOnEscapePress,
      allowHeightOverflow,
      isConfirmDisabled,
      isSecondaryDisabled,
      isConfirmLoading,
      isSecondaryLoading,
      confirmTestId,
      secondaryTestId,
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
        allowHeightOverflow={allowHeightOverflow}
      >
        {() => (
          <div>
            <Modal.Header title={title} {...this.props.modalHeaderProps} />
            <Modal.Content {...this.props.modalContentProps}>
              {children}
            </Modal.Content>
            <Modal.Controls {...this.props.modalControlsProps}>
              {confirmLabel && (
                <Button
                  testId={confirmTestId}
                  disabled={isConfirmDisabled}
                  loading={isConfirmLoading}
                  buttonType={intent}
                  onClick={() => onConfirm()}
                >
                  {confirmLabel}
                </Button>
              )}
              {secondaryLabel && (
                <Button
                  testId={secondaryTestId}
                  disabled={isSecondaryDisabled}
                  loading={isSecondaryLoading}
                  buttonType={secondaryIntent}
                  onClick={() => onSecondary && onSecondary()}
                >
                  {secondaryLabel}
                </Button>
              )}
              {cancelLabel && (
                <Button
                  testId={cancelTestId}
                  buttonType="muted"
                  onClick={() => onCancel()}
                >
                  {cancelLabel}
                </Button>
              )}
            </Modal.Controls>
          </div>
        )}
      </Modal>
    );
  }
}

export default ModalConfirm;
