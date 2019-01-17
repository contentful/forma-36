import React from 'react';
import SkeletonText from '../SkeletonText';
import { SkeletonTextPropTypes } from '../SkeletonText/SkeletonText';

class SkeletonBodyText extends React.Component {
  static propTypes = SkeletonTextPropTypes;

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
