import React from 'react';
import PropTypes from 'prop-types';

class SkeletonImage extends React.Component {
  static propTypes = {
    testId: PropTypes.string,
    offsetLeft: PropTypes.number,
    offsetTop: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    testId: 'cf-ui-skeleton-image',
    offsetLeft: undefined,
    offsetTop: undefined,
    width: 70,
    height: 70,
  };

  render() {
    const {
      testId,
      offsetLeft,
      offsetTop,
      width,
      height,
      ...otherProps
    } = this.props;

    return (
      <rect
        x={offsetLeft}
        y={offsetTop}
        rx="0"
        ry="0"
        width={width}
        height={height}
        {...otherProps}
      />
    );
  }
}

export default SkeletonImage;
