import * as React from 'react';
import ReactModal from 'react-modal';

import { Box } from '@contentful/f36-core';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';

import { ModalHeader, ModalHeaderProps } from './ModalHeader/ModalHeader';
import { ModalContent, ModalContentProps } from './ModalContent/ModalContent';
import { getModalStyles } from './Modal.styles';
import type { ModalSizeType, ModalPositionType } from './types';

const ModalSizesMapper: { [key in ModalSizeType]: string } = {
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
   * @default true
   */
  shouldCloseOnOverlayClick?: boolean;
  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   * @default true
   */
  shouldCloseOnEscapePress?: boolean;
  /**
   * Indicating if modal is centered or linked to the top
   * @default center
   */
  position?: ModalPositionType;
  /**
   * Top offset if position is 'top'
   * @default 50px
   */
  topOffset?: number | string;
  /**
   * Modal title that is used in header
   */
  title?: string;
  /**
   * Size of the modal window
   * @default medium
   */
  size?: ModalSizeType | string | number;
  /**
   * Are modals higher than viewport allowed
   * @default false
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
   * Optional property to set initial focus
   */
  initialFocusRef?: React.RefObject<HTMLElement>;

  children: React.ReactNode | RenderModal;
}

type RenderModal = (modalProps: ModalProps) => React.ReactNode;

function focusFirstWithinNode(node: HTMLElement) {
  if (node && node.querySelectorAll) {
    const elements = node.querySelectorAll('input, button');
    if (elements.length > 0) {
      const firstElement = elements[0];
      // @ts-expect-error focus might be missing
      if (typeof firstElement.focus === 'function') {
        // @ts-expect-error focus might be missing
        firstElement.focus();
      }
    }
  }
}

export const Modal = ({
  allowHeightOverflow = false,
  position = 'center',
  shouldCloseOnEscapePress = true,
  shouldCloseOnOverlayClick = true,
  size = 'medium',
  testId = 'cf-ui-modal',
  topOffset = '50px',
  aria,
  ...otherProps
}: ExpandProps<ModalProps>) => {
  const contentRef = React.useRef<HTMLDivElement>(null);

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

  React.useEffect(() => {
    if (props.isShown) {
      setTimeout(() => {
        if (props.initialFocusRef && props.initialFocusRef.current) {
          if (props.initialFocusRef.current.focus) {
            props.initialFocusRef.current.focus();
          }
        } else if (contentRef.current) {
          focusFirstWithinNode(contentRef.current);
        }
      }, 100);
    }
  }, [props.isShown, props.initialFocusRef]);

  const renderDefault = () => {
    return (
      <>
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
      </>
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
      shouldFocusAfterRender
      shouldReturnFocusAfterClose
      portalClassName={styles.portal}
      style={{
        content: {
          top: position === 'center' ? 0 : topOffset,
        },
      }}
      className={{
        base: styles.base.root,
        afterOpen: styles.base.afterOpen,
        beforeClose: styles.base.beforeClose,
      }}
      overlayClassName={{
        base: styles.modalOverlay.root,
        afterOpen: styles.modalOverlay.afterOpen,
        beforeClose: styles.modalOverlay.beforeClose,
      }}
      closeTimeoutMS={200}
      contentRef={(ref) => {
        contentRef.current = ref;
      }}
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
};

Modal.displayName = 'Modal';
