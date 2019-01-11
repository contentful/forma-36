import React from 'react';
import SkeletonText from '../SkeletonText';
import { SkeletonTextPropTypes } from '../SkeletonText/SkeletonText';

class SkeletonDisplayText extends React.Component {
  static propTypes = SkeletonTextPropTypes;

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
