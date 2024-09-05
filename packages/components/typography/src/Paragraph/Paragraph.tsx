import React, { useRef } from 'react';
import type {
  PropsWithHTMLElement,
  CommonProps,
  MarginProps,
  ExpandProps,
} from '@contentful/f36-core';
import { Text } from '../Text';
import { useDensity } from '@contentful/f36-utils';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TextLink } from '@contentful/f36-text-link';

// eslint-disable-next-line import/no-extraneous-dependencies
import {
  ShowMore,
  ShowMoreProps,
  Truncate as ReactTruncate,
  type ShowMoreRef,
  type ShowMoreToggleLinesFn,
} from '@re-dev/react-truncate';

export type ParagraphInternalProps = CommonProps &
  MarginProps & {
    children: React.ReactNode;
    isTruncated?: boolean;
    isWordBreak?: boolean;
  };

export type ParagraphProps = PropsWithHTMLElement<ParagraphInternalProps, 'p'>;

export const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  ExpandProps<ParagraphProps>
>(
  (
    { children, isTruncated, testId = 'cf-ui-paragraph', ...otherProps },
    ref,
  ) => {
    const density = useDensity();

    return (
      <Text
        as="p"
        testId={testId}
        fontSize={density === 'high' ? 'fontSizeMHigh' : 'fontSizeM'}
        lineHeight={density === 'high' ? 'lineHeightMHigh' : 'lineHeightM'}
        marginBottom="spacingM"
        {...otherProps}
        ref={ref}
      >
        {isTruncated ? (
          <Truncate showMore lines={2}>
            {children}
          </Truncate>
        ) : (
          children
        )}
      </Text>
    );
  },
);

Paragraph.displayName = 'Paragraph';

type TruncateProps = ShowMoreProps & {
  showMore?: boolean;
};

const Truncate: React.FC<TruncateProps> = ({
  children,
  showMore,
  ...otherProps
}) => {
  // The Toggle method will be passed back through `useImperativeHandle`
  const ref = useRef<ShowMoreRef>(null);

  // Custom buttons can be expanded and collapsed through this method
  const toggleLines: ShowMoreToggleLinesFn = (e) => {
    ref.current?.toggleLines(e);
  };

  return showMore ? (
    <ShowMore
      ref={ref}
      {...otherProps}
      // more={<TextLink onClick={toggleLines}>...</TextLink>}
      // less={<TextLink onClick={toggleLines}>see less content</TextLink>}
    >
      {children}
    </ShowMore>
  ) : (
    <ReactTruncate>{children}</ReactTruncate>
  );
};
