import React, { Component } from 'react';
import SkeletonText from '../SkeletonText';
import { SkeletonTextProps } from '../SkeletonText';

export type SkeletonBodyTextProps = SkeletonTextProps & typeof defaultProps;

const defaultProps = {
  numberOfLines: 2,
  offsetTop: 0,
  offsetLeft: 0,
  lineHeight: 16,
  marginBottom: 8,
};

export class SkeletonBodyText extends Component<SkeletonBodyTextProps> {
  static defaultProps = defaultProps;

  render() {
    return <SkeletonText {...this.props} />;
  }
}

export default SkeletonBodyText;
