import React from 'react';
import type {
  CommonProps,
  MarginProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';
import { useFormControl } from '../FormControl/FormControlContext';
import { useDensity } from '@contentful/f36-utils';

export interface HelpTextInternalProps extends CommonProps, MarginProps {
  children: React.ReactNode;
}

export type HelpTextProps = PropsWithHTMLElement<HelpTextInternalProps, 'p'>;

/**
 * `HelpText` is a styled copy block with guidance, placed in the context of form components.
 */

export const HelpText = React.forwardRef<
  HTMLParagraphElement,
  ExpandProps<HelpTextProps>
>(({ testId = 'cf-ui-help-text', ...otherProps }, ref) => {
  const { id } = useFormControl({});
  const density = useDensity();
  return (
    <Text
      as="p"
      fontColor="gray500"
      fontSize={density === 'high' ? 'fontSizeS' : 'fontSizeM'}
      lineHeight={density === 'high' ? 'lineHeightS' : 'lineHeightCondensed'}
      testId={testId}
      id={`${id}-helptext`}
      marginTop="spacingXs"
      {...otherProps}
      ref={ref}
    />
  );
});

HelpText.displayName = 'HelpText';
