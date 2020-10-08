import React, { Component } from 'react';
import cn from 'classnames';
import Icon from '../Icon/Icon';
import styles from './ValidationMessage.css';

export interface ValidationMessageProps {
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const defaultProps: Partial<ValidationMessageProps> = {
  testId: 'cf-ui-validation-message',
};

export class ValidationMessage extends Component<ValidationMessageProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles['ValidationMessage'], className);

    return (
      <div {...otherProps} className={classNames} data-test-id={testId}>
        <Icon
          icon="ErrorCircle"
          className={styles['ValidationMessage__icon']}
          color="negative"
        />
        <p className={styles['ValidationMessage__text']}>{children}</p>
      </div>
    );
  }
}

export default ValidationMessage;
