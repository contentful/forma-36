import React, { isValidElement } from 'react';
import {
  DisplayText,
  Subheading,
  type HeadingElement,
} from '@contentful/f36-typography';
import type { HeaderProps } from './Header';
import { getHeaderTitleStyles } from './HeaderTitle.styles';

type HeaderTitleProps = {
  title: HeaderProps['title'];
  variant: string;
  withBackButton?: boolean;
  as?: HeadingElement;
  size?: 'medium' | 'large';
};

export function HeaderTitle({
  title,
  variant,
  withBackButton = false,
  as = 'h1',
  size = 'large',
}: HeaderTitleProps) {
  const styles = getHeaderTitleStyles({ variant, withBackButton });
  const Element =
    variant === 'breadcrumb' || size === 'medium' ? Subheading : DisplayText;

  return (
    <div className={styles.noWrap}>
      {isValidElement(title) ? (
        title
      ) : (
        <Element as={as} className={styles.title}>
          {title}
        </Element>
      )}
    </div>
  );
}

HeaderTitle.displayName = 'HeaderTitle';
