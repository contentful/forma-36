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

export const GridItem = (props: GridItemProps) => {
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

  const handleShorthand = (property: string, start?: string|number, end?: string|number) => {
    if(start && end) {
      return {[`grid${property}`]: `${start} / ${end}`}
    } else if (start && !end) {
      return {[`grid${property}Start`]: start}
    } else if (end && !start) {
      return {[`grid${property}End`]: end}
    }
  }

  const style = {
    ...handleShorthand('Column', columnStart, columnEnd),
    ...handleShorthand('Row', rowStart, rowEnd),
    gridArea: area,
    order,
    ...props.style
  };

  return (
    <div {...otherProps} style={style} {...className}>
      {children}
    </div>
  );
};

export default GridItem;