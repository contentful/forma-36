import React from 'react';
import {
  PropsWithHTMLElement,
  CommonProps,
  MarginProps,
  ExpandProps,
} from '@contentful/f36-core';
import { Text } from '../Text';

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
>(({ children, testId = 'cf-ui-paragraph', ...otherProps }, ref) => {
  return (
    <Text
      as="p"
      testId={testId}
      marginBottom="spacingM"
      lineHeight="lineHeightM"
      {...otherProps}
      ref={ref}
    >
      {children}
    </Text>
  );
});

Paragraph.displayName = 'Paragraph';
