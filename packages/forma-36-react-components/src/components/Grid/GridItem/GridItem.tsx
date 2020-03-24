import React from 'react';
import * as CSS from 'csstype';

export type GridItemProps = {
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
   * one of grid-column-start css values */
  columnStart: CSS.GridColumnStartProperty;
  /**
   * one of grid-column-end css values */
  columnEnd: CSS.GridColumnEndProperty;
  /**
   * one of grid-column-start css values */
  rowStart: CSS.GridRowStartProperty;
  /**
   * one of grid-row-end css values */
  rowEnd: CSS.GridRowEndProperty;
  /**
   * one of grid-row-end css values */
  area: CSS.GridAreaProperty;
  /**
   * order css property */
  order: number
} & typeof defaultProps;

const defaultProps = {
  columns: 'auto',
  rows: 'auto',
  columnGap: 'spacingM',
  rowGap: '',
  testId: 'cf-ui-grid',
};

export const GridItem = (props: GridItemProps) => {
  const {
    children,
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    area,
    order
  } = props;
  const styles = {
    gridColumnStart: columnStart,
    gridColumnEnd: columnEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    gridArea: area,
    order
  };

  return (
    <div style={styles} {...props}>
      {children}
    </div>
  );
};