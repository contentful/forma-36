import React from 'react';
import PropTypes from 'prop-types';

export default class TableBody extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    extraClassNames: '',
  };

  render() {
    const { extraClassNames, children } = this.props;

    return <tbody className={extraClassNames}>{children}</tbody>;
  }
}
