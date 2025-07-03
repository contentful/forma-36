import React, { forwardRef, type HTMLAttributes, type Ref } from 'react';
import { cx } from 'emotion';
import { type CommonProps } from '@contentful/f36-core';
import { Caption } from '@contentful/f36-typography';
import { TextLink } from '@contentful/f36-text-link';
import { getUsageCardDescriptionStyles } from './UsageCardDescription.styles';

export type UsageCardDescriptionProps = {
  text?: string;
  link?: string;
  linkTitle?: string;
  children: React.ReactNode;
} & CommonProps &
  HTMLAttributes<HTMLDivElement>;

const _UsageCardDescription = (
  props: UsageCardDescriptionProps,
  ref: Ref<HTMLDivElement>,
) => {
  const {
    children,
    text,
    link,
    linkTitle,
    className,
    testId = 'cf-ui-usage-card-description',
    ...otherProps
  } = props;
  const styles = getUsageCardDescriptionStyles();

  return (
    <Caption
      {...otherProps}
      ref={ref}
      className={cx(styles.usageCardDescription, className)}
      testId={testId}
    >
      {children}
      {text}{' '}
      <TextLink target="_blank" rel="noopener noreferrer" href={link}>
        {linkTitle}
      </TextLink>
    </Caption>
  );
};

export const UsageCardDescription = forwardRef(_UsageCardDescription);
