import React, { Component } from 'react';
import cn from 'classnames';

const styles = require('./HelpText.css');

interface HelpTextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  extraClassNames?: string;
  testId?: string;
  children: React.ReactNode;
}

export class HelpText extends Component<HelpTextProps> {
  static defaultProps = {
    testId: 'cf-ui-help-text',
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
