import React from 'react';
import PropTypes from 'prop-types';

export const SkeletonTextPropTypes = {
  numberOfLines: PropTypes.number,
  width: PropTypes.number,
  offsetTop: PropTypes.number,
  offsetLeft: PropTypes.number,
  lineHeight: PropTypes.number,
  marginBottom: PropTypes.number,
};

export class SkeletonText extends React.Component {
  static propTypes = SkeletonTextPropTypes;

  static defaultProps = {
    numberOfLines: 1,
    width: undefined,
    offsetTop: 0,
    offsetLeft: 0,
    lineHeight: 21,
    marginBottom: 20,
  };

  getLineWidth = lastLine => {
    if (this.props.width) {
      return this.props.width;
    }
    return lastLine ? '80%' : '100%';
  };

  render() {
    const {
      numberOfLines,
      offsetLeft,
      offsetTop,
      lineHeight,
      marginBottom,
    } = this.props;

    return (
      <React.Fragment>
        {Array.from(Array(numberOfLines)).map((_, index) => (
          <rect
            key={`skeleton-display-text-${index}`} // eslint-disable-line
            x={offsetLeft}
            y={index * (lineHeight + marginBottom) + offsetTop}
            rx="0"
            ry="0"
            width={this.getLineWidth(
              numberOfLines > 1 && numberOfLines - index === 1,
            )}
            height={lineHeight}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default SkeletonText;
