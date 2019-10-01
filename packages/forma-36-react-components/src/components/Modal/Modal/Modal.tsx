import React, { Component } from 'react';
import cn from 'classnames';
import ReactModal from 'react-modal';
import ModalHeader, { ModalHeaderProps } from '../ModalHeader/ModalHeader';
import ModalContent, { ModalContentProps } from '../ModalContent/ModalContent';
import ModalControls from '../ModalControls/ModalControls';

const styles = require('./Modal.css');

const ModalSizesMapper = {
  medium: '520px',
  small: '400px',
  large: '700px',
  fullWidth: '100vw',
};

export type ModalSizeType =
  | 'small'
  | 'medium'
  | 'large'
  | 'fullWidth'
  | string
  | number;

export type ModalProps = {
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
} & typeof defaultProps;

const defaultProps = {
  shouldCloseOnEscapePress: true,
  shouldCloseOnOverlayClick: true,
  position: 'center',
  testId: 'cf-ui-modal',
  topOffset: '50px',
  size: 'medium',
  allowHeightOverflow: true,
};

export class Modal extends Component<ModalProps> {
  static Header = ModalHeader;

  static Content = ModalContent;

  static Controls = ModalControls;

  static defaultProps = defaultProps;

  renderDefault() {
    return (
      <React.Fragment>
        {this.props.title && (
          <ModalHeader
            title={this.props.title}
            onClose={this.props.onClose}
            {...this.props.modalHeaderProps}
          />
        )}
        <ModalContent {...this.props.modalContentProps}>
          {this.props.children}
        </ModalContent>
      </React.Fragment>
    );
  }

  render() {
    return (
      <ReactModal
        ariaHideApp={false}
        onRequestClose={this.props.onClose}
        isOpen={this.props.isShown}
        onAfterOpen={this.props.onAfterOpen}
        shouldCloseOnEsc={this.props.shouldCloseOnEscapePress}
        shouldCloseOnOverlayClick={this.props.shouldCloseOnOverlayClick}
        portalClassName={styles.Modal__portal}
        className={{
          base: styles.Modal__wrap,
          afterOpen: styles['Modal__wrap--after-open'],
          beforeClose: styles['Modal__wrap--before-close'],
        }}
        style={{
          content: {
            top: this.props.position === 'center' ? 0 : this.props.topOffset,
          },
        }}
        overlayClassName={{
          base: cn({
            [styles.Modal__overlay]: true,
            [styles['Modal__overlay--centered']]:
              this.props.position === 'center',
          }),
          afterOpen: styles['Modal__overlay--after-open'],
          beforeClose: styles['Modal__overlay--before-close'],
        }}
        htmlOpenClassName="Modal__html--open"
        bodyOpenClassName="Modal__body--open"
        closeTimeoutMS={300}
      >
        <div
          data-test-id={this.props.testId}
          style={{
            width: ModalSizesMapper[this.props.size] || this.props.size,
          }}
          className={cn(styles.Modal, this.props.className, {
            [styles['Modal--overflow']]: this.props.allowHeightOverflow,
          })}
        >
          {typeof this.props.children === 'function'
            ? this.props.children(this.props)
            : this.renderDefault()}
        </div>
      </ReactModal>
    );
  }
}

export default Modal;
