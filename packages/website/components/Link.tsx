import React from 'react';
import Link from 'next/link';
import { css, cx } from '@emotion/css';

const styles = {
  link: css({
    color: 'inherit',
    textDecoration: 'none',
  }),
};

export const InternalLink = ({ href, children, className, ...props }) => {
  return (
    <Link href={href} className={cx(styles.link, className)} {...props}>
      {children}
    </Link>
  );
};
