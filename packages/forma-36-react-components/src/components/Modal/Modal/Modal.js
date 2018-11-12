import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ReactModal from 'react-modal';
import ModalHeader from '../ModalHeader';
import ModalContent from '../ModalContent';
import ModalControls from '../ModalControls';
import styles from './Modal.css';

const ModalPositions = {
  CENTER: 'center',
  TOP: 'top',
};

export const ModalSizes = {
  MEDIUM: 'medium',
  SMALL: 'small',
  LARGE: 'large',
};

const ModalSizesMapper = {
  [ModalSizes.MEDIUM]: '520px',
  [ModalSizes.SMALL]: '400px',
  [ModalSizes.LARGE]: '700px',
};

class Modal extends React.Component {
  static Positions = ModalPositions;
  static Sizes = ModalSizes;
  static Header = ModalHeader;
  static Content = ModalContent;
  static Controls = ModalControls;

  static propTypes = {
    /**
     * When true, the dialog is shown.
     */
    isShown: PropTypes.bool.isRequired,

    /**
     * Function that will be called when the exit is complete.
     */
    onClose: PropTypes.func.isRequired,

    /**
     * Function that will be called when the enter is complete.
     */
    onAfterOpen: PropTypes.func,
    /**
     * Boolean indicating if clicking the overlay should close the overlay.
     */
    shouldCloseOnOverlayClick: PropTypes.bool,
    /**
     * Boolean indicating if pressing the esc key should close the overlay.
     */
    shouldCloseOnEscapePress: PropTypes.bool,
    /**
     * Boolean indicating if modal is centered
     */
    position: PropTypes.oneOf([ModalPositions.CENTER, ModalPositions.TOP]),
    /**
      Top offset if position is ModalPositions.TOP
    */
    topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
      Modal title that is used in header
    */
    title: PropTypes.string,
    /**
      Size of the modal window
    */
    size: PropTypes.oneOfType([
      PropTypes.oneOf([ModalSizes.MEDIUM, ModalSizes.LARGE, ModalSizes.SMALL])
        .isRequired,
      PropTypes.number.isRequired,
      PropTypes.string.isRequired,
    ]),
    /**
     * Are modals highter that viewerport allowed
     */
    allowHeightOverflow: PropTypes.bool,

    extraClassNames: PropTypes.string,
    testId: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  };

  static defaultProps = {
    shouldCloseOnEscapePress: true,
    shouldCloseOnOverlayClick: true,
    position: ModalPositions.CENTER,
    testId: 'cf-ui-modal',
    title: undefined,
    extraClassNames: undefined,
    topOffset: '50px',
    size: ModalSizes.MEDIUM,
    allowHeightOverflow: false,
    onAfterOpen: () => {},
  };

  renderDefault() {
    return (
      <React.Fragment>
        {this.props.title && (
          <ModalHeader title={this.props.title} onClose={this.props.onClose} />
        )}
        <ModalContent>{this.props.children}</ModalContent>
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
            top:
              this.props.position === ModalPositions.CENTER
                ? 0
                : this.props.topOffset,
          },
        }}
        overlayClassName={{
          base: cn({
            [styles.Modal__overlay]: true,
            [styles['Modal__overlay--centered']]:
              this.props.position === ModalPositions.CENTER,
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
          className={cn(styles.Modal, this.props.extraClassNames, {
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
