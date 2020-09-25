import React, { Component } from 'react';
import SkeletonText from '../SkeletonText';
import { SkeletonTextProps } from '../SkeletonText';

export type SkeletonDisplayTextProps = SkeletonTextProps &
  Partial<typeof defaultProps>;

const defaultProps = {
  numberOfLines: 1,
  width: 100,
  offsetTop: 0,
  offsetLeft: 0,
  lineHeight: 21,
  marginBottom: 20,
};

export class SkeletonDisplayText extends Component<SkeletonDisplayTextProps> {
  static defaultProps = defaultProps;

  render() {
    return <SkeletonText {...this.props} />;
  }
}

export default SkeletonDisplayText;
