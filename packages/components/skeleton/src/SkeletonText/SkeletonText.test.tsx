import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Skeleton } from '../index';

describe('SkeletonText', () => {
  it('has no a11y issues', async () => {
    const { container } = render(
      <Skeleton.Container>
        <Skeleton.Text />
      </Skeleton.Container>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('positions multiple lines correctly with numeric props', () => {
    const numberOfLines = 3;
    const lineHeight = 20; // px
    const marginBottom = 10; // px
    const offsetTop = 5; // px

    const { container } = render(
      <Skeleton.Container>
        <Skeleton.Text
          numberOfLines={numberOfLines}
          lineHeight={lineHeight}
          marginBottom={marginBottom}
          offsetTop={offsetTop}
        />
      </Skeleton.Container>,
    );

    const rects = container.querySelectorAll('rect');
    // First rect is the gradient fill rect from SkeletonContainer, rest are lines
    // We only want the clipped line rects, which are inside the clipPath definition
    // A simple filter: width attribute equal to '100%' or '80%' or matching our explicit width logic
    const lineRects = Array.from(rects).filter(
      (r) =>
        r.getAttribute('clip-path') === null &&
        r.parentElement?.tagName !== 'defs',
    );

    expect(lineRects).toHaveLength(numberOfLines);

    lineRects.forEach((rect, index) => {
      const expectedY = index * (lineHeight + marginBottom) + offsetTop;
      expect(Number(rect.getAttribute('y'))).toBe(expectedY);
    });

    // Width logic: last line should be 80%, others 100%
    expect(lineRects[0].getAttribute('width')).toBe('100%');
    expect(lineRects[1].getAttribute('width')).toBe('100%');
    expect(lineRects[2].getAttribute('width')).toBe('80%');
  });

  it('uses provided width prop for all lines', () => {
    const customWidth = 120;
    const { container } = render(
      <Skeleton.Container>
        <Skeleton.Text numberOfLines={2} width={customWidth} />
      </Skeleton.Container>,
    );
    const rects = container.querySelectorAll('rect');
    const lineRects = Array.from(rects).filter(
      (r) =>
        r.getAttribute('clip-path') === null &&
        r.parentElement?.tagName !== 'defs',
    );
    expect(
      lineRects.every(
        (r) => r.getAttribute('width') === customWidth.toString(),
      ),
    ).toBe(true);
  });

  it('accepts string values for positional props and coerces them', () => {
    // Provide numeric-like strings to ensure coercion works
    const props = {
      numberOfLines: 2,
      lineHeight: '18',
      marginBottom: '6',
      offsetTop: '4',
      offsetLeft: '3',
    } as const;

    const { container } = render(
      <Skeleton.Container>
        <Skeleton.Text {...props} />
      </Skeleton.Container>,
    );

    const rects = container.querySelectorAll('rect');
    const lineRects = Array.from(rects).filter(
      (r) =>
        r.getAttribute('clip-path') === null &&
        r.parentElement?.tagName !== 'defs',
    );
    expect(lineRects).toHaveLength(2);

    // First line y should be offsetTop
    expect(Number(lineRects[0].getAttribute('y'))).toBe(4);
    // Second line y should be (lineHeight + marginBottom) + offsetTop = 18 + 6 + 4 = 28
    expect(Number(lineRects[1].getAttribute('y'))).toBe(28);
    // x should reflect offsetLeft
    expect(Number(lineRects[0].getAttribute('x'))).toBe(3);
  });

  it('single line always has full width when width prop absent', () => {
    const { container } = render(
      <Skeleton.Container>
        <Skeleton.Text numberOfLines={1} />
      </Skeleton.Container>,
    );
    const rects = container.querySelectorAll('rect');
    const lineRects = Array.from(rects).filter(
      (r) =>
        r.getAttribute('clip-path') === null &&
        r.parentElement?.tagName !== 'defs',
    );
    expect(lineRects).toHaveLength(1);
    expect(lineRects[0].getAttribute('width')).toBe('100%');
  });
});
