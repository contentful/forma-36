import React, { Component } from 'react';

export type TabPanelProps = {
  id: string;
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
} & Partial<typeof defaultProps>;

const defaultProps = {
  testId: 'cf-ui-tab-panel',
};

export class TabPanel extends Component<TabPanelProps> {
  static defaultProps = defaultProps;

  render() {
    const { testId, className, children, id, ...rest } = this.props;
    return (
      <div
        {...rest}
        id={id}
        role="tabpanel"
        data-test-id={testId}
        className={className}
      >
        {children}
      </div>
    );
  }
}

export default TabPanel;
