import React from 'react';
import type { BadgeVariant } from './types';
import { Container } from './Badge.styled';

export interface BadgeProps {
  variant?: BadgeVariant;
  style?: React.CSSProperties;
  className?: string;
  testId?: string;
  children: React.ReactNode;
}

function Badge(props: BadgeProps, ref: React.Ref<HTMLDivElement>) {
  const {
    className,
    children,
    variant = 'primary',
    testId = 'cf-ui-badge',
    ...otherProps
  } = props;

  return (
    <Container
      className={className}
      ref={ref}
      data-test-id={testId}
      variant={variant}
      {...otherProps}
    >
      {children}
    </Container>
  );
}

const _Badge = React.forwardRef(Badge);
export { _Badge as Badge };
