import React from 'react';

import { Modal } from '../CompoundModal';
import type { ModalProps } from '../Modal';
import type { ModalHeaderProps } from '../ModalHeader/ModalHeader';
import type { ModalContentProps } from '../ModalContent/ModalContent';
import type { ModalControlsProps } from '../ModalControls/ModalControls';
import { Button } from '@contentful/f36-button';
import { warnDeprecated } from '@contentful/f36-core';

interface ConfirmationModalBaseProps {
  /**
   * When true, the dialog is shown.
   */
  isShown: boolean;
  /**
   * Function that will be called when the confirm button is clicked. This does not close the ConfirmationModal.
   */
  onConfirm(): void;
  /**
   * Function that will be called when the cancel button is clicked. This does not close the ConfirmationModal.
   */
  onCancel: ModalProps['onClose'];
  /**
   * Label of the confirm button
   */
  confirmLabel?: string | false;
  /**
   * Label of the cancel button
   */
  cancelLabel?: string | false;
  /**
   * The intent of the ConfirmationModal. Used for the Button.
   */
  intent?: 'primary' | 'positive' | 'negative';
  /**
   * Size of the modal window
   */
  size?: ModalProps['size'];
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- we don't know the type of element to give initial focus
  initialFocusRef?: React.RefObject<any>;

  testId?: string;
  confirmTestId?: string;
  cancelTestId?: string;
  children: React.ReactNode;
}

export type ConfirmationModalProps<T extends string = string> =
  ConfirmationModalBaseProps & {
    /**
     * Modal title that is used in header
     */
    title?: T;
  } & (T extends ''
      ? {
          /**
           * Without a visible title, `aria.label` is required to name the dialog
           */
          aria: NonNullable<ModalProps['aria']> & { label: string };
        }
      : {
          /**
           * Additional aria attributes
           */
          aria?: ModalProps['aria'];
        });

export const ConfirmationModal = <T extends string = string>({
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
  title = 'Are you sure?' as T,
  initialFocusRef,
  aria,
}: ConfirmationModalProps<T>) => {
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
      aria={aria}
      size={size}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscapePress={shouldCloseOnEscapePress}
      allowHeightOverflow={allowHeightOverflow}
      initialFocusRef={cancelRef}
    >
      {() => {
        return (
          <>
            <Modal.Header title={title} {...modalHeaderProps} />
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
};

ConfirmationModal.displayName = 'ConfirmationModal';

/**
 * @deprecated Use `ConfirmationModalProps` instead. Will be removed in v7.
 */
export type ModalConfirmProps<T extends string = string> =
  ConfirmationModalProps<T>;

/**
 * @deprecated Use `ConfirmationModal` instead. Will be removed in v7.
 */
export const ModalConfirm = <T extends string = string>(
  props: ModalConfirmProps<T>,
) => {
  warnDeprecated({
    component: 'ModalConfirm',
    hint: 'Use `ConfirmationModal` instead.',
  });
  return <ConfirmationModal {...(props as ConfirmationModalProps)} />;
};

ModalConfirm.displayName = 'ModalConfirm';
