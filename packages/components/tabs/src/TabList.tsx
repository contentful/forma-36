import React from 'react';
import type { CommonProps } from '@contentful/f36-core';
import { useArrowKeyNavigation, mergeRefs } from '@contentful/f36-core';
import { getTabsStyles } from './Tabs.styles';
import { useTabsContext } from './tabsContext';

const TABLIST_ITEMS_SELECTOR = '[role="tab"]:not(:disabled)';
export interface TabListProps extends CommonProps {
  /**
   * visual variant of TabList
   */
  variant?: 'default' | 'horizontal-divider' | 'vertical-divider';
  children?: React.ReactNode;
}

function _TabList(
  {
    className,
    children,
    variant = 'default',
    testId = 'cf-ui-tab-list',
    style,
    ...otherProps
  }: TabListProps,
  ref: React.Ref<HTMLDivElement>,
): React.ReactElement {
  const styles = getTabsStyles({ className, variant });
  const listRef = React.useRef(null);

  const { setSelectedTab } = useTabsContext();
  const { focusedIndex, handleArrowsKeyDown } = useArrowKeyNavigation({
    itemsContainerRef: listRef,
    itemsSelector: TABLIST_ITEMS_SELECTOR,
    keyType: 'horizontal',
  });

  React.useEffect(() => {
    if (listRef.current) {
      const availableElements = listRef.current.querySelectorAll(
        TABLIST_ITEMS_SELECTOR,
      );

      if (
        availableElements.length > 0 &&
        focusedIndex < availableElements.length
      ) {
        const focusedElement = availableElements[focusedIndex] as HTMLElement;
        focusedElement.focus({
          preventScroll: true,
        });
        setSelectedTab(focusedElement.getAttribute('aria-controls'));
      }
    }
  }, [focusedIndex, setSelectedTab]);

  const elementProps = {
    testId,
    className: styles.tabList,
    style,
    role: 'tablist',
    onKeyDown: handleArrowsKeyDown,
    ...otherProps,
  };

  return (
    <div {...elementProps} ref={mergeRefs(listRef, ref)}>
      {children}
    </div>
  );
}

export const TabList = React.forwardRef(_TabList);
