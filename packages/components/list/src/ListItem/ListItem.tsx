import { cx, css } from '@emotion/css';
import React from 'react';
import tokens from '@contentful/f36-tokens';
import type { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';

import { List } from '../List';

export type ListItemProps = PropsWithHTMLElement<
  CommonProps & {
    children?: React.ReactNode;
  },
  'li'
>;

const ListItemBase = (
  {
    className,
    children,
    testId = 'cf-ui-list-item',
    ...otherProps
  }: ListItemProps,
  ref: React.Ref<HTMLLIElement>,
): React.ReactElement => {
  return (
    <li
      className={cx(
        css({
          fontSize: tokens.fontSizeM,
          fontFamily: tokens.fontStackPrimary,
          lineHeight: tokens.lineHeightL,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          listStyle: (children as any)?.type === List ? 'none' : '',
        }),
        className,
      )}
      data-test-id={testId}
      {...otherProps}
      ref={ref}
    >
      {children}
    </li>
  );
};

ListItemBase.displayName = 'ListItem';

export const ListItem = React.forwardRef(ListItemBase);
