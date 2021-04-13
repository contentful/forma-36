import { cx, css } from 'emotion';
import React from 'react';
import tokens from '@contentful/f36-tokens';
import { CommonProps } from '@contentful/f36-core';

import { List } from '../List';

export interface ListItemProps extends CommonProps {
  children?: React.ReactNode;
}

export function ListItem({
  className,
  children,
  testId = 'cf-ui-list-item',
  ...otherProps
}: ListItemProps): React.ReactElement {
  return (
    <li
      className={cx(
        css({
          fontSize: tokens.fontSizeM,
          fontFamily: tokens.fontStackPrimary,
          lineHeight: tokens.lineHeightDefault,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          listStyle: (children as any).type === List ? 'none' : '',
        }),
        className,
      )}
      data-test-id={testId}
      {...otherProps}
    >
      {children}
    </li>
  );
}
