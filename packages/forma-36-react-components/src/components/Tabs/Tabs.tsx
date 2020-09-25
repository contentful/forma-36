import React, { Component, CSSProperties } from 'react';
import cn from 'classnames';

import styles from './Tabs.css';

export type TabsProps = {
  role?: 'navigation' | 'tablist';
  style?: CSSProperties;
  className?: string;
  withDivider?: boolean;
  children?: React.ReactNode;
  testId?: string;
} & Partial<typeof defaultProps>;

const defaultProps = {
  testId: 'cf-ui-tabs',
  role: 'tablist',
  withDivider: false,
};

export class Tabs extends Component<TabsProps> {
  static defaultProps = defaultProps;

  render() {
    const {
      className,
      children,
      testId,
      role,
      withDivider,
      style,
    } = this.props;

    const classNames = cn(
      styles.Tabs,
      { [styles['Tabs__with-divider']]: withDivider },
      className,
    );

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
