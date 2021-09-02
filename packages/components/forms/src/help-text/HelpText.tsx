import React from 'react';
import { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';

export type HelpTextInternalProps = CommonProps & {
  children: React.ReactNode;
};

export type HelpTextProps = PropsWithHTMLElement<HelpTextInternalProps, 'p'>;

/**
 * `HelpText` is a styled copy block with guidance, placed in the context of form components.
 */

export const HelpText = React.forwardRef<HTMLParagraphElement, HelpTextProps>(
  ({ testId = 'cf-ui-help-text', ...otherProps }, ref) => {
    return (
      <Text
        as="p"
        fontColor="gray500"
        fontSize="fontSizeM"
        lineHeight="lineHeightDefault"
        testId={testId}
        {...otherProps}
        ref={ref}
      />
    );
  },
);

HelpText.displayName = 'HelpText';
