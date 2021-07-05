import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import { NotificationItem, NotificationItemProps } from './NotificationItem';

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

  timer: number | null = null;

  state = {
    isShown: false,
  };

  componentDidMount() {
    this.startTimer();
    this.setState({ isShown: true });
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
        this.close();
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

  close = () => {
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
    const { duration, ...otherProps } = this.props;
    return (
      <AnimateHeight
        duration={200}
        height={this.state.isShown ? 'auto' : 0}
        easing="ease-in-out"
        animateOpacity
        onAnimationEnd={() => {
          if (this.state.isShown === false) {
            if (this.props.onClose) {
              this.props.onClose();
            }
          }
        }}
      >
        <div
          style={{ pointerEvents: 'all' }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <NotificationItem {...otherProps} onClose={this.close} />
        </div>
      </AnimateHeight>
    );
  }
}
