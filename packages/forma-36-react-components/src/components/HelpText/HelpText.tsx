import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./HelpText.css');

export type HelpTextProps = {
  extraClassNames?: string;
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
    const { extraClassNames, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles.HelpText, extraClassNames);

    return (
      <p {...otherProps} className={classNames} data-test-id={testId}>
        {children}
      </p>
    );
  }
}

export default HelpText;
