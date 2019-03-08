import React, { Component } from 'react';
import cn from 'classnames';
import Icon from '../Icon/Icon';
import styles from './ValidationMessage.css';

export interface ValidationMessageProps {
  extraClassNames?: string;
  testId?: string;
  children: React.ReactNode;
}

export class ValidationMessage extends Component<ValidationMessageProps> {
  static defaultProps = {
    testId: 'cf-ui-validation-message',
  };

  render() {
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles['ValidationMessage'], extraClassNames);

    return (
      <div className={classNames} {...otherProps} data-test-id={testId}>
        <Icon
          icon="ErrorCircle"
          extraClassNames={styles['ValidationMessage__icon']}
          color="negative"
        />
        <p className={styles['ValidationMessage__text']}>{children}</p>
      </div>
    );
  }
}

export default ValidationMessage;
