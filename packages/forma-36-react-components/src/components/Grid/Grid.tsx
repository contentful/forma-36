import React from 'react';
import * as CSS from 'csstype';
import tokens from '@contentful/forma-36-tokens';
import cn from 'classnames';

import styles from './Grid.css';

export type GapTypes =
  | 'none'
  | 'spacing2xs'
  | 'spacingXs'
  | 'spacingS'
  | 'spacingM'
  | 'spacingL'
  | 'spacingXl'
  | 'spacing2Xl'
  | 'spacing3Xl'
  | 'spacing4Xl';

export interface GridProps {
  /**
   * Class names to be appended to the className prop of the component */
  className?: string;
  /**
   * Child nodes to be rendered in the component */
  children?: React.ReactNode;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id) */
  testId?: string;
  /**
   * Defines how many columns, default is `auto` */
  columns?: number | CSS.GridTemplateColumnsProperty<string>;
  /**
   * Defines how many rows, default is `auto` */
  rows?: number | CSS.GridTemplateColumnsProperty<string>;
  /**
   * Spaces between rows, corresponds to of spacing tokens values, default is none */
  rowGap?: GapTypes;
  /**
   * One of Spacing tokens values, default is 0 */
  columnGap?: GapTypes;
  /**
   * One of grid-auto-flow css values */
  flow?: CSS.GridAutoFlowProperty;
  /**
   * Sets display:inline-grid */
  inline?: boolean;
  /**
   * One of justify-content css values */
  justifyContent?: CSS.JustifyContentProperty;
  /**
   * One of justify-content css values */
  alignContent?: CSS.AlignContentProperty;
  /**
   * style prop, for inline styles */
  style?: React.CSSProperties;
}

const defaultProps = {
  columns: 'auto',
  rows: 'auto',
  columnGap: 'spacingM',
  rowGap: 'none',
  testId: 'cf-ui-grid',
};

export const Grid = (props: GridProps) => {
  const {
    className,
    children,
    testId,
    rows,
    columns,
    inline,
    rowGap,
    columnGap,
    justifyContent,
    alignContent,
    flow,
    style,
    ...otherProps
  } = props;

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
    gridColumnGap: columnGap && handleGap(columnGap),
    gridRowGap: rowGap && handleGap(rowGap),
    ...style,
  };

  const classNames = cn(styles.Grid, className, {
    [styles.Grid__inline]: inline,
  });

  return (
    <div
      {...otherProps}
      style={inlineStyle}
      className={classNames}
      data-test-id={testId}
    >
      {children}
    </div>
  );
};
Grid.defaultProps = defaultProps;

export default Grid;
