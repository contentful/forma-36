import React, { Component } from 'react';
import SkeletonText from '../SkeletonText';
import { SkeletonTextProps } from '../SkeletonText/SkeletonText';

export class SkeletonDisplayText extends Component<SkeletonTextProps> {
  static defaultProps = {
    numberOfLines: 1,
    width: 100,
    offsetTop: 0,
    offsetLeft: 0,
    lineHeight: 21,
    marginBottom: 20,
  };

  render() {
    return <SkeletonText {...this.props} />;
  }
}

export default SkeletonDisplayText;
