import React, { isValidElement } from 'react';
import { DisplayText, Subheading } from '@contentful/f36-typography';
import type { HeaderProps } from './Header';
import { getHeaderTitleStyles } from './HeaderTitle.styles';

type HeaderTitleProps = {
  title: HeaderProps['title'];
  variant: HeaderProps['variant'];
};

export function HeaderTitle({ title, variant }: HeaderTitleProps) {
  const styles = getHeaderTitleStyles();
  const Element = variant === 'title' ? DisplayText : Subheading;

  return (
    <div className={styles.noWrap}>
      {isValidElement(title) ? (
        title
      ) : (
        <Element as="h1" className={styles.title}>
          {title}
        </Element>
      )}
    </div>
  );
}
