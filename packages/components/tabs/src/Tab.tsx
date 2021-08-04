import React, { useCallback } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import type { CommonProps } from '@contentful/f36-core';

import { getTabStyles } from './Tabs.styles';

export interface TabProps extends CommonProps {
  id: string;
  onSelect?: (id: string, e: React.SyntheticEvent) => void;
  selected?: boolean;
  href?: string;
  target?: string;
  disabled?: boolean;
  tabIndex?: number;
  children: React.ReactNode;
}

export function Tab({
  children,
  className,
  disabled = false,
  href,
  id,
  onSelect,
  selected = false,
  style,
  tabIndex = 0,
  testId = 'cf-ui-tab',
}: TabProps): React.ReactElement {
  const styles = getTabStyles({ className, selected, disabled });
  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (onSelect && !disabled) {
        onSelect(id, e);
      }
    },
    [disabled, id, onSelect],
  );

  const handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (onSelect && e.key === 'Enter') {
        onSelect(id, e);
        e.preventDefault();
      }
    },
    [id, onSelect],
  );

  const elementProps = {
    className: styles.tab,
    onClick: handleClick,
    onKeyPress: handleKeyPress,
    style: style,
    'data-test-id': testId,
    tabIndex,
  };

  if (disabled) {
    elementProps['aria-disabled'] = true;
  }
  if (href) {
    elementProps['href'] = href;
    if (selected) {
      elementProps['aria-current'] = 'page';
    }
    return <a {...elementProps}>{children}</a>;
  } else {
    elementProps['aria-selected'] = selected;
    elementProps['role'] = 'tab';
    elementProps['aria-controls'] = id;
    return <div {...elementProps}>{children}</div>;
  }
}
