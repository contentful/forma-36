import React from 'react';
import {
  DisplayText,
  Subheading,
  type HeadingElement,
} from '@contentful/f36-typography';
import { getHeaderTitleStyles } from './HeaderTitle.styles';
import type { LayoutHeaderInnerProps } from './LayoutHeaderInner';

type HeaderTitleProps = {
  title: LayoutHeaderInnerProps['title'];
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
    <Element as={as} className={styles.title}>
      {title}
    </Element>
  );
}

HeaderTitle.displayName = 'HeaderTitle';
