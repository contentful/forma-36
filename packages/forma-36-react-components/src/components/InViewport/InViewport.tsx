import React, { Component } from 'react';
import cn from 'classnames';
import isBrowser from '../../utils/isBrowser';
import throttle from '../../utils/throttle';
import styles from './InViewport.css';

export type InViewportProps = {
  offset: number;
  onOverflowTop?: Function;
  onOverflowRight?: Function;
  onOverflowBottom?: Function;
  onOverflowLeft?: Function;
  className?: string;
  children?: React.ReactNode;
  testId?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  testId: 'cf-ui-in-viewport',
  offset: 0,
};

export class InViewport extends Component<InViewportProps> {
  static defaultProps = defaultProps;

  tGetDomPosition: EventListenerOrEventListenerObject | null = null;
  nodeRef: HTMLDivElement | null = null;
  lastOverflowAt: string | null = null;

  tOnOverflowTop =
    this.props.onOverflowTop && throttle(100, this.props.onOverflowTop);
  tOnOverflowBottom =
    this.props.onOverflowBottom && throttle(100, this.props.onOverflowBottom);
  tOnOverflowRight =
    this.props.onOverflowRight && throttle(100, this.props.onOverflowRight);
  tOnOverflowLeft =
    this.props.onOverflowLeft && throttle(100, this.props.onOverflowLeft);

  componentDidMount() {
    this.getDomPosition();
    this.bindEventListeners();
  }

  componentDidUpdate() {
    this.getDomPosition();
  }

  componentWillUnmount() {
    if (isBrowser && this.tGetDomPosition) {
      window.removeEventListener('scroll', this.tGetDomPosition, true);
      window.removeEventListener('resize', this.tGetDomPosition);
    }
  }

  getDomPosition = () => {
    if (isBrowser && this.nodeRef) {
      const html = document.documentElement;
      const boundingClientRect = this.nodeRef.getBoundingClientRect();
      const windowWidth = window.innerWidth || html.clientWidth;
      const windowHeight = window.innerHeight || html.clientHeight;
      this.handleOverflow(boundingClientRect, windowWidth, windowHeight);
    }
  };

  bindEventListeners = () => {
    this.tGetDomPosition = throttle(600, this.getDomPosition);
    if (isBrowser) {
      window.addEventListener('scroll', this.tGetDomPosition, true);
      window.addEventListener('resize', this.tGetDomPosition);
    }
  };

  handleOverflow = (
    { top, left, bottom, right }: ClientRect | DOMRect,
    windowWidth: number,
    windowHeight: number,
  ) => {
    const { offset } = this.props;
    const topThreshold = 0 - offset;
    const leftThreshold = 0 - offset;
    const rightThreshold = windowWidth + offset;
    const bottomThreshold = windowHeight + offset;

    if (top + right + bottom + left !== 0) {
      if (top < topThreshold && this.lastOverflowAt !== 'bottom') {
        this.lastOverflowAt = 'top';
        this.tOnOverflowTop && this.tOnOverflowTop();
      } else if (left < leftThreshold && this.lastOverflowAt !== 'right') {
        this.lastOverflowAt = 'left';
        this.tOnOverflowLeft && this.tOnOverflowLeft();
      } else if (bottom > bottomThreshold && this.lastOverflowAt !== 'top') {
        this.lastOverflowAt = 'bottom';
        this.tOnOverflowBottom && this.tOnOverflowBottom();
      } else if (right > rightThreshold && this.lastOverflowAt !== 'left') {
        this.lastOverflowAt = 'right';
        this.tOnOverflowRight && this.tOnOverflowRight();
      }
    }
  };

  render() {
    const {
      className,
      children,
      testId,
      onOverflowBottom,
      onOverflowLeft,
      onOverflowRight,
      onOverflowTop,
      ...otherProps
    } = this.props;

    const classNames = cn(styles['InViewport'], className);

    return (
      <div
        ref={(ref) => {
          this.nodeRef = ref;
        }}
        className={classNames}
        data-test-id={testId}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
}

export default InViewport;
