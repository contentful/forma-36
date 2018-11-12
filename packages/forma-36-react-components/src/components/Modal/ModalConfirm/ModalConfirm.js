import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import Button from '../../Button';

class ModalConfirm extends React.Component {
  static propTypes = {
    /**
     * When true, the dialog is shown.
     */
    isShown: PropTypes.bool.isRequired,
    /**
     * Function that will be called when the confirm button is clicked. This does not close the ModalConfirm.
     */
    onConfirm: PropTypes.func.isRequired,
    /**
     * Function that will be called when the cancel button is clicked. This does not close the ModalConfirm.
     */
    onCancel: PropTypes.func.isRequired,
    /**
      Modal title that is used in header
    */
    title: PropTypes.string,
    /**
     * Label of the confirm button
     */
    confirmLabel: PropTypes.string,
    /**
     * Label of the cancel button
     */
    cancelLabel: PropTypes.string,
    /**
     * The intent of the ModalConfirm. Used for the Button.
     */
    intent: PropTypes.oneOf(['primary', 'positive', 'negative']),
    /**
      Size of the modal window
    */
    size: PropTypes.oneOfType([
      PropTypes.oneOf([
        Modal.Sizes.MEDIUM,
        Modal.Sizes.LARGE,
        Modal.Sizes.SMALL,
      ]).isRequired,
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]),
    /**
     * Boolean indicating if clicking the overlay should close the overlay.
     */
    shouldCloseOnOverlayClick: PropTypes.bool,
    /**
     * Boolean indicating if pressing the esc key should close the overlay.
     */
    shouldCloseOnEscapePress: PropTypes.bool,
    /**
     * When true, the confirm button is set to disabled.
     */
    isConfirmDisabled: PropTypes.bool,
    /**
     * When true, the confirm button is set to loading.
     */
    isConfirmLoading: PropTypes.bool,
    testId: PropTypes.string,
    confirmTestId: PropTypes.string,
    cancelTestId: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

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
    size: Modal.Sizes.MEDIUM,
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
                onClick={onConfirm}
              >
                {confirmLabel}
              </Button>
              <Button
                testId={cancelTestId}
                buttonType="muted"
                onClick={onCancel}
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
