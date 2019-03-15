import React, { Component } from 'react';

export type TabPanelProps = {
  id: string;
  extraClassNames?: string;
  testId?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-tab-panel',
};

export class TabPanel extends Component<TabPanelProps> {
  static defaultProps = defaultProps;

  render() {
    const { testId, extraClassNames, children, id, ...rest } = this.props;
    return (
      <div
        {...rest}
        id={id}
        role="tabpanel"
        data-test-id={testId}
        className={extraClassNames}
      >
        {children}
      </div>
    );
  }
}

export default TabPanel;
