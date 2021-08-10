import React from 'react';
import { CommonProps, PolymorphicComponentProps } from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';

export type HelpTextInternalProps = CommonProps & {
  children: React.ReactNode;
};

export type HelpTextProps = PolymorphicComponentProps<
  'p',
  HelpTextInternalProps
>;

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
