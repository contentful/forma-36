import React, { Component } from 'react';

type stringOrNumber = string | number;

export type SkeletonTextProps = {
  numberOfLines: number;
  offsetTop: stringOrNumber;
  offsetLeft: stringOrNumber;
  lineHeight: stringOrNumber;
  marginBottom: stringOrNumber;
  width?: stringOrNumber;
} & typeof defaultProps;

const defaultProps = {
  numberOfLines: 1,
  offsetTop: 0,
  offsetLeft: 0,
  lineHeight: 21,
  marginBottom: 20,
};

export class SkeletonText extends Component<SkeletonTextProps> {
  static defaultProps = defaultProps;

  getLineWidth = (lastLine: boolean) => {
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
