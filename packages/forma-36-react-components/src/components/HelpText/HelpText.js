import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './HelpText.css';

class HelpText extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    testId: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    extraClassNames: undefined,
    testId: 'cf-ui-help-text',
    children: undefined,
  };

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles.HelpText, extraClassNames);

    return (
      <p className={classNames} data-test-id={testId} {...otherProps}>
        {children}
      </p>
    );
  }
}

export default HelpText;
