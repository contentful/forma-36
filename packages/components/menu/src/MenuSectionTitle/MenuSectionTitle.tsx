import React from 'react';
import { cx } from 'emotion';
import { Caption, type CaptionProps } from '@contentful/f36-typography';
import type { ExpandProps } from '@contentful/f36-core';

import { getMenuSectionTitleStyles } from './MenuSectionTitle.styles';

export type MenuSectionTitleProps = CaptionProps;

export const MenuSectionTitle = (props: ExpandProps<MenuSectionTitleProps>) => {
  const {
    children,
    testId = 'cf-ui-menu-section-title',
    className,
    ...otherProps
  } = props;

  const styles = getMenuSectionTitleStyles();

  return (
    <Caption
      // Techincally, menus cannot contain headings according to ARIA.
      // We hide the heading from assistive technology, and only use it
      // as a label
      aria-hidden="true"
      as="div"
      testId={testId}
      className={cx(styles, className)}
      marginBottom="none"
      {...otherProps}
    >
      {children}
    </Caption>
  );
};
