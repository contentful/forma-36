import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Icon from '../Icon/Icon';
import styles from './ValidationMessage.css';

export class ValidationMessage extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    extraClassNames: PropTypes.string,
    testId: PropTypes.string,
  };

  static defaultProps = {
    extraClassNames: undefined,
    testId: 'cf-ui-validation-message',
  };

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles.ValidationMessage, extraClassNames);

    return (
      <div className={classNames} {...otherProps} data-test-id={testId}>
        <Icon
          icon="ErrorCircle"
          extraClassNames={styles.ValidationMessage__icon}
          color="negative"
        />
        <p className={styles.ValidationMessage__text}>{children}</p>
      </div>
    );
  }
}

export default ValidationMessage;
