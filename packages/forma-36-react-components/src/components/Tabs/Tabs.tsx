import React, { Component, CSSProperties } from 'react';
import cn from 'classnames';

const styles = require('./Tabs.css');

export type TabsProps = {
  role?: 'navigation' | 'tablist';
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-tabs',
  role: 'tablist',
};

export class Tabs extends Component<TabsProps> {
  static defaultProps = defaultProps;

  render() {
    const { className, children, testId, role, style } = this.props;

    const classNames = cn(styles.Tabs, className);

    const elementProps = {
      'data-test-id': testId,
      className: classNames,
      style,
    };

    if (role === 'navigation') {
      return (
        <nav {...elementProps} role="navigation">
          {children}
        </nav>
      );
    }

    return (
      <div {...elementProps} role="tablist">
        {children}
      </div>
    );
  }
}

export default Tabs;
