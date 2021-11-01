import React from 'react';
import type { CommonProps } from '@contentful/f36-core';
import { TabsContextProvider } from './tabsContext';

const calculateIndexMap = (children) => {
  const tabListArray = React.Children.toArray(children).find(
    (child: any) => child.type.displayName === 'TabList',
  ) as any;
  return tabListArray.props.children.map((item, index) => ({
    index,
    id: item.props.panelId,
  }));
};
export interface TabsProps extends CommonProps {
  children?: React.ReactNode;
  /**
   * default active Tab
   */
  defaultTab?: string;
  currentTab?: string;
}

function _Tabs(
  {
    className,
    children,
    testId = 'cf-ui-tabs',
    style,
    defaultTab,
    currentTab,
    ...otherProps
  }: TabsProps,
  ref: React.Ref<HTMLDivElement>,
): React.ReactElement {
  const elementProps = {
    'data-test-id': testId,
    style,
    ...otherProps,
  };

  return (
    <TabsContextProvider
      defaultTab={defaultTab}
      currentTab={currentTab}
      indexMap={calculateIndexMap(children)}
    >
      <div {...elementProps} ref={ref}>
        {children}
      </div>
    </TabsContextProvider>
  );
}

export const Tabs = React.forwardRef(_Tabs);
