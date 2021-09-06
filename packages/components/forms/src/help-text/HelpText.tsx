import React from 'react';
import {
  CommonProps,
  MarginProps,
  PropsWithHTMLElement,
} from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';

export interface HelpTextInternalProps extends CommonProps, MarginProps {
  children: React.ReactNode;
}

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
        testId={testId}
        marginTop="spacingXs"
        {...otherProps}
        ref={ref}
      />
    );
  },
);

HelpText.displayName = 'HelpText';
