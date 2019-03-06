import React, { Component } from 'react';
import SkeletonText from '../SkeletonText';
import { SkeletonTextProps } from '../SkeletonText/SkeletonText';

export class SkeletonBodyText extends Component<SkeletonTextProps> {
  static defaultProps = {
    numberOfLines: 2,
    offsetTop: 0,
    offsetLeft: 0,
    lineHeight: 16,
    marginBottom: 8,
  };

  render() {
    return <SkeletonText {...this.props} />;
  }
}

export default SkeletonBodyText;
