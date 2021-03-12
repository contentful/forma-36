import React from 'react';
import tokens from '@contentful/f36-tokens';
import { PolymorphicComponentProps, Primitive } from '@contentful/f36-core';
import cn from 'classnames';
import type * as CSS from 'csstype';

import styles from './Grid.css';

export type GapTypes =
  | 'none'
  | 'spacing2Xs'
  | 'spacingXs'
  | 'spacingS'
  | 'spacingM'
  | 'spacingL'
  | 'spacingXl'
  | 'spacing2Xl'
  | 'spacing3Xl'
  | 'spacing4Xl';

export interface GridOwnProps {
  /**
   * Child nodes to be rendered in the component */
  children?: React.ReactNode;
  /**
   * Defines how many columns, default is `auto` */
  columns?: number | CSS.Property.GridTemplateColumns;
  /**
   * Defines how many rows, default is `auto` */
  rows?: number | CSS.Property.GridTemplateColumns;
  /**
   * Spaces between rows, corresponds to of spacing tokens values, default is none */
  rowGap?: GapTypes;
  /**
   * One of Spacing tokens values, default is 0 */
  columnGap?: GapTypes;
  /**
   * One of grid-auto-flow css values */
  flow?: CSS.Property.GridAutoFlow;
  /**
   * Sets display:inline-grid */
  inline?: boolean;
  /**
   * One of justify-content css values */
  justifyContent?: CSS.Property.JustifyContent;
  /**
   * One of justify-content css values */
  alignContent?: CSS.Property.AlignContent;
}

export type GridProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  GridOwnProps
>;

const DEFAULT_TAG = 'div';

function Grid<E extends React.ElementType = typeof DEFAULT_TAG>(
  {
    alignContent,
    children,
    className,
    columnGap = 'spacingM',
    columns = 'auto',
    flow,
    inline,
    justifyContent,
    rowGap = 'none',
    rows = 'auto',
    style,
    testId = 'cf-ui-grid',
    ...otherProps
  }: GridProps<E>,
  ref: typeof otherProps.ref,
) {
  const handleGridTemplate = (value?: string | number) => {
    if (typeof value === 'number') {
      return `repeat(${value}, minmax(0, 1fr)`;
    }
    return value;
  };

  const handleGap = (value: GapTypes) => {
    if (value === 'none') {
      return 0;
    } else {
      return tokens[value];
    }
  };

  const inlineStyle = {
    gridTemplateColumns: handleGridTemplate(columns),
    gridTemplateRows: handleGridTemplate(rows),
    flow,
    justifyContent,
    alignContent,
    columnGap: columnGap && handleGap(columnGap),
    rowGap: rowGap && handleGap(rowGap),
    ...style,
  };

  const classNames = cn(styles.Grid, className, {
    [styles.Grid__inline]: inline,
  });

  return (
    <Primitive
      as={DEFAULT_TAG}
      {...otherProps}
      ref={ref}
      style={inlineStyle}
      className={classNames}
      testId={testId}
    >
      {children}
    </Primitive>
  );
}

const _Grid = React.forwardRef(Grid);
export { _Grid as Grid };
