import React from 'react';
import type * as CSS from 'csstype';

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
  columnStart?: CSS.Property.GridColumnStart;
  /**
   * one of grid-column-end css values */
  columnEnd?: CSS.Property.GridColumnEnd;
  /**
   * one of grid-column-start css values */
  rowStart?: CSS.Property.GridRowStart;
  /**
   * one of grid-row-end css values */
  rowEnd?: CSS.Property.GridRowEnd;
  /**
   * one of grid-area css values */
  area?: CSS.Property.GridArea;
  /**
   * order css property */
  order?: number;
  /**
   * inline css properties */
  style?: React.CSSProperties;
  /**
   * html tag */
  htmlTag?: React.ElementType;
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
    htmlTag: Container = 'div',
    ...otherProps
  } = props;

  const calculatedArea = area
    ? area
    : [
        rowStart || 'auto',
        columnStart || 'auto',
        rowEnd || 'auto',
        columnEnd || 'auto',
      ].join(' / ');

  const style = {
    gridArea: calculatedArea,
    order,
    ...props.style,
  };

  return (
    <Container {...otherProps} className={className} style={style}>
      {children}
    </Container>
  );
};

export default GridItem;
