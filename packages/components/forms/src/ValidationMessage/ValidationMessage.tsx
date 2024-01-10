import React, { forwardRef } from 'react';
import {
  Flex,
  type CommonProps,
  type MarginProps,
  type PropsWithHTMLElement,
  type ExpandProps,
} from '@contentful/f36-core';
import { ErrorCircleOutlineIcon } from '@contentful/f36-icons';
import { Text } from '@contentful/f36-typography';
import { useFormControl } from '../FormControl/FormControlContext';
import { useDensity } from '@contentful/f36-utils';

export interface ValidationMessageInternalProps
  extends CommonProps,
    MarginProps {
  children: React.ReactNode;
}

export type ValidationMessageProps = PropsWithHTMLElement<
  ValidationMessageInternalProps,
  'div'
>;

export const ValidationMessage = forwardRef<
  HTMLDivElement,
  ExpandProps<ValidationMessageProps>
>(({ children, testId = 'cf-ui-validation-message', ...otherProps }, ref) => {
  const { id } = useFormControl({});
  const density = useDensity();
  return (
    <Flex
      marginTop="spacing2Xs"
      {...otherProps}
      ref={ref}
      testId={testId}
      alignItems="center"
      id={id ? `${id}-validation` : undefined}
      aria-live="assertive"
    >
      <Flex marginRight={density === 'high' ? 'spacing2Xs' : 'spacingXs'}>
        <ErrorCircleOutlineIcon
          size={density === 'high' ? 'tiny' : 'small'}
          variant="negative"
          aria-hidden="true"
        />
      </Flex>
      <Text
        as="p"
        fontColor="red600"
        fontSize={density === 'high' ? 'fontSizeS' : 'fontSizeM'}
        lineHeight={density === 'high' ? 'lineHeightS' : 'lineHeightM'}
      >
        {children}
      </Text>
    </Flex>
  );
});

ValidationMessage.displayName = 'ValidationMessage';
