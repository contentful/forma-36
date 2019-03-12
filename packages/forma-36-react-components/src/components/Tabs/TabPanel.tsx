import React, { Component } from 'react';

export interface TabPanelProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  id: string;
  extraClassNames?: string;
  testId?: string;
  children: React.ReactNode;
}

export class TabPanel extends Component<TabPanelProps> {
  static defaultProps = {
    testId: 'cf-ui-tab-panel',
  };

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
