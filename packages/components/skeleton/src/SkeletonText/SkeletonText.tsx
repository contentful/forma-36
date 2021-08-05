import React, { useCallback } from 'react';

type stringOrNumber = string | number;

export interface SkeletonTextProps {
  /**
   * A number of skeleton likes
   */
  numberOfLines?: number;
  /**
   * A distance between top of the container and the first line (in pixels)
   */
  offsetTop?: stringOrNumber;
  /**
   * A distance between left of the container and the beginning of lines (in pixels)
   */
  offsetLeft?: stringOrNumber;
  /**
   * A height of a one line (in pixels)
   */
  lineHeight?: stringOrNumber;
  /**
   * Spacing between lines (in pixels)
   */
  marginBottom?: stringOrNumber;
  /**
   * A width of a line
   */
  width?: stringOrNumber;
}

export function SkeletonText({
  numberOfLines = 1,
  offsetLeft = 0,
  offsetTop = 0,
  lineHeight = 21,
  marginBottom = 20,
  width,
}: SkeletonTextProps): React.ReactElement {
  const getLineWidth = useCallback(
    (lastLine: boolean) => {
      if (width) {
        return width;
      }

      return lastLine ? '80%' : '100%';
    },
    [width],
  );

  return (
    <React.Fragment>
      {Array.from(Array(numberOfLines)).map((_, index) => (
        <rect
          key={`skeleton-display-text-${index}`} // eslint-disable-line
          x={offsetLeft}
          y={
            index * (+lineHeight! + +marginBottom!) + +offsetTop! // eslint-disable-line @typescript-eslint/no-non-null-assertion
          }
          rx="0"
          ry="0"
          width={getLineWidth(
            numberOfLines! > 1 && numberOfLines! - index === 1, // eslint-disable-line @typescript-eslint/no-non-null-assertion
          )}
          height={lineHeight}
        />
      ))}
    </React.Fragment>
  );
}
