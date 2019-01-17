import React from 'react';
import PropTypes from 'prop-types';

class SkeletonImage extends React.Component {
  static propTypes = {
    testId: PropTypes.string,
    offsetLeft: PropTypes.number,
    offsetTop: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    radiusX: PropTypes.number,
    radiusY: PropTypes.number,
  };

  static defaultProps = {
    testId: 'cf-ui-skeleton-image',
    offsetLeft: undefined,
    offsetTop: undefined,
    width: 70,
    height: 70,
    radiusX: 0,
    radiusY: 0,
  };

  render() {
    const {
      testId,
      offsetLeft,
      offsetTop,
      width,
      height,
      radiusX,
      radiusY,
      ...otherProps
    } = this.props;

    return (
      <rect
        x={offsetLeft}
        y={offsetTop}
        rx={radiusX}
        ry={radiusY}
        width={width}
        height={height}
        {...otherProps}
      />
    );
  }
}

export default SkeletonImage;
