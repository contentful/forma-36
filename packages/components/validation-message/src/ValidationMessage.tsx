import { css } from 'emotion';
import React, { forwardRef } from 'react';
import tokens from '@contentful/f36-tokens';
import { Flex } from '@contentful/f36-core';
import type {
  BoxInternalProps,
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import { ErrorCircleOutline } from '@contentful/f36-icons';
import { Paragraph } from '@contentful/f36-typography';

const DEFAULT_TAG = 'div';

const styles = {
  icon: css({
    marginRight: tokens.spacing2Xs,
    marginTop: `calc(${tokens.spacing2Xs} / 2)`,
    minHeight: '18px',
    minWidth: '18px',
  }),
  text: css({
    color: tokens.colorNegative,
    margin: 0,
  }),
};

export type ValidationMessageInternalProps = BoxInternalProps;

export type ValidationMessageProps = PolymorphicComponentProps<
  typeof DEFAULT_TAG,
  ValidationMessageInternalProps
>;

const _ValidationMessage: PolymorphicComponentWithRef<
  ValidationMessageInternalProps,
  typeof DEFAULT_TAG
> = (
  { className, children, testId = 'cf-ui-validation-message', ...otherProps },
  forwardedRef,
) => {
  return (
    <Flex
      {...otherProps}
      className={className}
      ref={forwardedRef}
      testId={testId}
    >
      <ErrorCircleOutline className={styles.icon} variant="negative" />
      <Paragraph className={styles.text}>{children}</Paragraph>
    </Flex>
  );
};

export const ValidationMessage: PolymorphicComponent<
  ValidationMessageInternalProps,
  typeof DEFAULT_TAG
> = forwardRef(_ValidationMessage);
