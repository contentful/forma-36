import React from 'react';
import type { PropsWithHTMLElement, ExpandProps } from '@contentful/f36-core';
import { Text, TextProps } from '../Text';
import { useDensity } from '@contentful/f36-utils';

export type ParagraphInternalProps = TextProps & {
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
    {
      children,
      testId = 'cf-ui-paragraph',
      marginBottom = 'spacingM',
      ...otherProps
    },
    ref,
  ) => {
    const density = useDensity();

    return (
      <Text
        as="p"
        testId={testId}
        fontSize={density === 'high' ? 'fontSizeMHigh' : 'fontSizeM'}
        lineHeight={density === 'high' ? 'lineHeightMHigh' : 'lineHeightM'}
        marginBottom={marginBottom}
        {...otherProps}
        ref={ref}
      >
        {children}
      </Text>
    );
  },
);

Paragraph.displayName = 'Paragraph';
