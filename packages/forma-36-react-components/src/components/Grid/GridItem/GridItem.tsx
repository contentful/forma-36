import React from 'react';
import * as CSS from 'csstype';

export interface GridItemProps {
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
   * one of grid-area css values */
  area?: CSS.GridAreaProperty;
  /**
   * order css property */
  order?: number
  /**
   * order css property */
  style?: React.CSSProperties
}

const GridItem = (props: GridItemProps) => {
  const {
    children,
    className,
    columnStart,
    columnEnd,
    rowStart,
    rowEnd,
    area,
    order,
    ...otherProps
  } = props;
  
  const style = {
    gridColumn: `${columnStart} / ${columnEnd}`,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
    gridArea: area,
    order,
    ...props.style
  };

  console.log(style.gridColumn)

  return (
    <div {...otherProps} style={style} {...className}>
      {children}
    </div>
  );
};

export default GridItem;