import React from 'react';
import type { BadgeVariant, BadgeProps } from './types';
import { Container } from './Badge.styled';

const statusTagTypeMap: { [key: string]: BadgeVariant } = {
  published: 'positive',
  draft: 'warning',
  archived: 'negative',
  changed: 'primary',
  deleted: 'negative',
  new: 'primary-filled',
};

function Badge(props: BadgeProps, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    children,
    variant = 'primary',
    entityStatusType,
    testId = 'cf-ui-badge',
    ...otherProps
  } = props;

  const calculatedVariant = entityStatusType
    ? statusTagTypeMap[entityStatusType]
    : variant;

  return (
    <Container
      className={className}
      ref={ref}
      data-test-id={testId}
      variant={calculatedVariant}
      {...otherProps}
    >
      {children}
    </Container>
  );
}

const _Badge = React.forwardRef(Badge);
export { _Badge as Badge };
