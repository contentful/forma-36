import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './Subheading.css';

class Subheading extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node.isRequired,
    testId: PropTypes.string,
    element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
  };

  static defaultProps = {
    element: 'h2',
    extraClassNames: undefined,
    testId: 'cf-ui-subheading',
  };

  render() {
    const {
      extraClassNames,
      children,
      testId,
      element,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Subheading, extraClassNames);

    const Element = element;

    return (
      <Element className={classNames} data-test-id={testId} {...otherProps}>
        {children}
      </Element>
    );
  }
}

export default Subheading;
