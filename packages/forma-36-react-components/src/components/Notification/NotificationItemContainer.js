import React from 'react';
import PropTypes from 'prop-types';

import AnimateHeight from 'react-animate-height';

import NotificationItem, {
  NotificationItemPropTypes,
} from './NotificationItem';

class NotificationItemContainer extends React.Component {
  static propTypes = {
    isShown: PropTypes.bool,
    duration: PropTypes.number.isRequired,
    ...NotificationItemPropTypes,
  };

  static defaultProps = {
    isShown: false,
  };

  state = {
    isShown: false,
  };

  componentDidMount() {
    this.startTimer();
    // eslint-disable-next-line
    this.setState({ isShown: true });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isShown !== this.props.isShown) {
      // eslint-disable-next-line
      this.setState({
        isShown: this.props.isShown,
      });
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    if (this.props.duration) {
      this.timer = setTimeout(() => {
        this.close();
      }, this.props.duration);
    }
  };

  stopTimer = () => {
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
    const { duration, ...rest } = this.props;
    return (
      <AnimateHeight
        duration={200}
        height={this.state.isShown ? 'auto' : 0}
        easing="ease-in-out"
        animateOpacity
        onAnimationEnd={() => {
          if (this.state.isShown === false) {
            this.props.onClose();
          }
        }}
      >
        <div
          style={{ pointerEvents: 'all' }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <NotificationItem {...rest} onClose={this.close} />
        </div>
      </AnimateHeight>
    );
  }
}

export default NotificationItemContainer;
