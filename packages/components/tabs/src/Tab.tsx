import React, { useCallback } from 'react';
import type { KeyboardEvent, MouseEvent } from 'react';
import type { CommonProps } from '@contentful/f36-core';
import { Box } from '@contentful/f36-core';

import { getTabStyles } from './Tabs.styles';

export interface TabProps extends CommonProps {
  id: string;
  onSelect?: (id: string, e: React.SyntheticEvent) => void;
  isSelected?: boolean;
  href?: string;
  target?: string;
  isDisabled?: boolean;
  tabIndex?: number;
  children: React.ReactNode;
}

function _Tab(
  {
    children,
    className,
    isDisabled = false,
    id,
    onSelect,
    isSelected = false,
    style,
    tabIndex = 0,
    testId = 'cf-ui-tab',
    ...otherProps
  }: TabProps,
  ref: React.Ref<HTMLAnchorElement> | React.Ref<HTMLDivElement>,
): React.ReactElement {
  const styles = getTabStyles({ className, isSelected, isDisabled });
  const handleClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (onSelect && !isDisabled) {
        onSelect(id, e);
      }
    },
    [isDisabled, id, onSelect],
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
    style,
    testId,
    tabIndex,
  };

  if (isDisabled) {
    elementProps['aria-disabled'] = true;
  }

  elementProps['aria-selected'] = isSelected;
  elementProps['role'] = 'tab';
  elementProps['aria-controls'] = id;
  return (
    <Box
      as="div"
      {...elementProps}
      {...otherProps}
      ref={ref as React.Ref<HTMLDivElement>}
    >
      {children}
    </Box>
  );
}

export const Tab = React.forwardRef(_Tab);
