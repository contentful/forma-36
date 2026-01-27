import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import { NotificationItem, NotificationItemProps } from './NotificationItem';
import { cx, css } from '@emotion/css';

export interface NotificationItemContainerProps extends NotificationItemProps {
  duration?: number;
  isShown?: boolean;
}

export interface NotificationItemContainerState {
  isShown: boolean;
}

const defaultProps: Partial<NotificationItemContainerProps> = {
  isShown: false,
};

export class NotificationItemContainer extends Component<
  NotificationItemContainerProps,
  NotificationItemContainerState
> {
  static defaultProps = defaultProps;
  displayName: 'NotificationItemContainer';

  timer: number | null = null;

  state = {
    isShown: Boolean(this.props.isShown),
  };

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps: NotificationItemContainerProps) {
    if (prevProps.isShown !== this.props.isShown) {
      this.setState({
        isShown: this.props.isShown!, // eslint-disable-line @typescript-eslint/no-non-null-assertion
      });
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    if (this.props.duration) {
      if (this.props.duration === 0) return;

      this.timer = window.setTimeout(() => {
        this.handleClose();
      }, this.props.duration);
    }
  };

  stopTimer = () => {
    if (this.props.duration === 0) return;

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  };

  handleClose = () => {
    this.stopTimer();
    this.setState({ isShown: false });
  };

  handleMouseEnter = () => {
    this.stopTimer();
  };

  handleMouseLeave = () => {
    this.startTimer();
  };

  render() {
    const { isShown, duration, ...otherProps } = this.props;
    const isClosing = !this.state.isShown;

    return (
      <AnimateHeight
        duration={200}
        height={this.state.isShown ? 'auto' : 0}
        easing="ease-in-out"
        animateOpacity
        onHeightAnimationEnd={() => {
          if (this.state.isShown === false) {
            if (this.props.onClose) {
              this.props.onClose();
            }
          }
        }}
      >
        <div
          className={cx(css({ pointerEvents: 'all' }))}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          data-state={isClosing ? 'closing' : 'shown'}
          aria-hidden={isClosing}
        >
          <NotificationItem {...otherProps} onClose={this.handleClose} />
        </div>
      </AnimateHeight>
    );
  }
}
