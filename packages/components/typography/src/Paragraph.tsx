import React from 'react';
import {
  PropsWithHTMLElement,
  CommonProps,
  MarginProps,
} from '@contentful/f36-core';
import { Text } from './Text';

export type ParagraphInternalProps = CommonProps &
  MarginProps & {
    children: React.ReactNode;
    isTruncated?: boolean;
  };

export type ParagraphProps = PropsWithHTMLElement<ParagraphInternalProps, 'p'>;

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, testId = 'cf-ui-paragraph', ...otherProps }, ref) => {
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
  },
);

Paragraph.displayName = 'Paragraph';
