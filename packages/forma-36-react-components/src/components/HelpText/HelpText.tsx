import React, { Component } from 'react';
import cn from 'classnames';

import styles from './HelpText.css';

export type HelpTextProps = {
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-help-text',
};

export class HelpText extends Component<HelpTextProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles.HelpText, className);

    return (
      <p {...otherProps} className={classNames} data-test-id={testId}>
        {children}
      </p>
    );
  }
}

export default HelpText;
