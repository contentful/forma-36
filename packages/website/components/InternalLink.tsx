import React from 'react';
import Link from 'next/link';
import { css, cx } from '@emotion/css';

const styles = {
  link: css({
    color: 'inherit',
    textDecoration: 'none',
  }),
};

type InternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const InternalLink = ({
  href,
  children,
  className,
}: InternalLinkProps) => {
  return (
    <Link href={href} className={cx(styles.link, className)}>
      {children}
    </Link>
  );
};
