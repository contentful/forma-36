import React, { useCallback } from 'react';

type stringOrNumber = string | number;

export interface SkeletonTextProps {
  numberOfLines?: number;
  offsetTop?: stringOrNumber;
  offsetLeft?: stringOrNumber;
  lineHeight?: stringOrNumber;
  marginBottom?: stringOrNumber;
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

export default SkeletonText;
