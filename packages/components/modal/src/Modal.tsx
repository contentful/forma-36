import * as React from 'react';
import ReactModal from 'react-modal';

import { Box, type CommonProps, type ExpandProps } from '@contentful/f36-core';

import { ModalContextProvider, type ModalIds } from './ModalContext';
import {
  ModalHeaderBase,
  type ModalHeaderProps,
} from './ModalHeader/ModalHeader';
import { ModalContent, ModalContentProps } from './ModalContent/ModalContent';
import { getModalStyles } from './Modal.styles';
import type { ModalSizeType, ModalPositionType } from './types';

const ModalSizesMapper: { [key in ModalSizeType]: string } = {
  medium: '520px',
  small: '400px',
  large: '700px',
  fullWidth: '100vw',
  zen: '100vw',
  fullscreen: '100vw',
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
  aria?: ReactModal.Props['aria'] & { label?: string };

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
   * @deprecated Use the `header` slot (`header={<Modal.Header title="…" />}`) or `ModalBasic` instead.
   */
  title?: string;
  /**
   * Modal subtitle that is used in header
   * @deprecated Use the `header` slot (`header={<Modal.Header subtitle="…" />}`) or `ModalBasic` instead.
   */
  subtitle?: string;
  /**
   * Header slot, takes a `<Modal.Header />`. Rendered above the content.
   * The header shows a close button wired to `onClose` while the modal is dismissable.
   * Wins over `title`/`subtitle` if both are set.
   */
  header?: React.ReactElement;
  /**
   * Controls slot, takes a `<Modal.Controls />`. Rendered below the content.
   */
  controls?: React.ReactElement;
  /**
   * When false, the header slot shows no close button, and neither overlay click
   * nor the esc key closes the modal.
   * @default true
   */
  isDismissable?: boolean;
  /**
   * Accessible label of the header close button.
   * `aria.closeIconLabel` on `Modal.Header` takes precedence.
   * @default Close
   */
  closeIconLabel?: string;
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
   * Optional props to override overlay behaviour
   */
  overlayProps?: Pick<CommonProps, 'className' | 'style'>;

  /**
   * Optional props to override ModalHeader behaviour
   * @deprecated Use the `header` slot and pass the props to `Modal.Header` directly, or `headerProps` on `ModalBasic`.
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
  isDismissable = true,
  ...otherProps
}: ExpandProps<ModalProps>) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [titleIds, setTitleIds] = React.useState<ModalIds>({});

  // stable on purpose: ModalHeader re-registers its ids whenever this changes
  const registerTitleIds = React.useCallback((newIds: ModalIds) => {
    setTitleIds(newIds);
    return () => setTitleIds({});
  }, []);

  const { onClose, closeIconLabel } = otherProps;
  const contextValue = React.useMemo(
    () => ({ registerTitleIds, onClose, isDismissable, closeIconLabel }),
    [registerTitleIds, onClose, isDismissable, closeIconLabel],
  );

  // explicit aria props win over the ids reported by the header
  const ariaProps: NonNullable<ModalProps['aria']> = {
    ...(aria?.label ? {} : { labelledby: titleIds.titleId }),
    describedby: titleIds.subtitleId,
    ...aria,
  };

  const props = {
    ...otherProps,
    allowHeightOverflow,
    isDismissable,
    position,
    shouldCloseOnEscapePress: isDismissable && shouldCloseOnEscapePress,
    shouldCloseOnOverlayClick: isDismissable && shouldCloseOnOverlayClick,
    size,
    testId,
    topOffset,
  };

  const styles = getModalStyles({
    position,
    size,
    allowHeightOverflow,
    className: otherProps.className,
    overlayClassName: otherProps.overlayProps?.className,
  });

  const onInitialFocus = () => {
    const contentEl = contentRef.current;
    if (contentEl) {
      const activeEl = document.activeElement;
      const isContentContainsActive =
        contentEl !== activeEl && contentEl.contains(activeEl);

      if (isContentContainsActive) {
        return;
      }
    }

    const initialFocusEl = props.initialFocusRef?.current;
    if (initialFocusEl) {
      initialFocusEl.focus?.();
    } else if (contentEl) {
      focusFirstWithinNode(contentEl);
    }
  };

  const onAfterOpen: ModalProps['onAfterOpen'] = (...args) => {
    if (props.onAfterOpen) {
      props.onAfterOpen(...args);
    }
    onInitialFocus();
  };

  const renderDefault = (children: React.ReactNode) => {
    return (
      <>
        {otherProps.header || (
          <ModalHeaderBase
            title={otherProps.title}
            subtitle={otherProps.subtitle}
            {...otherProps.modalHeaderProps}
          />
        )}
        <ModalContent {...otherProps.modalContentProps}>
          {children}
        </ModalContent>
        {otherProps.controls}
      </>
    );
  };

  return (
    <ModalContextProvider value={contextValue}>
      <ReactModal
        ariaHideApp={false}
        aria={ariaProps}
        onRequestClose={props.onClose}
        isOpen={otherProps.isShown}
        onAfterOpen={onAfterOpen}
        shouldCloseOnEsc={props.shouldCloseOnEscapePress}
        shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
        shouldFocusAfterRender
        shouldReturnFocusAfterClose
        portalClassName={styles.portal}
        style={{
          content: {
            top: position === 'center' ? 0 : topOffset,
          },
          overlay: otherProps.overlayProps?.style,
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
          {typeof otherProps.children === 'function' ? (
            <>
              {otherProps.header}
              {otherProps.children(props)}
              {otherProps.controls}
            </>
          ) : (
            renderDefault(otherProps.children)
          )}
        </Box>
      </ReactModal>
    </ModalContextProvider>
  );
};

Modal.displayName = 'Modal';
