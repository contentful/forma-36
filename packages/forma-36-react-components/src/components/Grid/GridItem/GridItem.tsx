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
  columnStart?: CSS.GridColumnStartProperty;
  /**
   * one of grid-column-end css values */
  columnEnd?: CSS.GridColumnEndProperty;
  /**
   * one of grid-column-start css values */
  rowStart?: CSS.GridRowStartProperty;
  /**
   * one of grid-row-end css values */
  rowEnd?: CSS.GridRowEndProperty;
  /**
   * one of grid-row-end css values */
  area?: CSS.GridAreaProperty;
  /**
   * order css property */
  order?: number
  /**
   * order css property */
  style?: React.CSSProperties
} & typeof defaultProps;

const defaultProps = {
  columns: 'auto',
  rows: 'auto',
  columnGap: 'spacingM',
  rowGap: '',
  testId: 'cf-ui-grid',
};

const GridItem = (props: GridItemProps) => {
  const {
    children,
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    area,
    order,
    style
  } = props;
  const inlineStyles = {
    gridColumnStart: columnStart,
    gridColumnEnd: columnEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    gridArea: area,
    order,
    ...style
  };

  return (
    <div style={inlineStyles} {...props}>
      {children}
    </div>
  );
};

export default GridItem;