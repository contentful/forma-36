import React from 'react';
import PropTypes from 'prop-types';

class Option extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { value, children, ...otherProps } = this.props;

    return (
      <option value={value} {...otherProps}>
        {children}
      </option>
    );
  }
}

export default Option;
