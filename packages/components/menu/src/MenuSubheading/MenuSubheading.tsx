import React from 'react';
import { cx } from 'emotion';
import { getMenuSubheadingStyles } from './MenuSubheading.styles';
import { Subheading, SubheadingProps } from '@contentful/f36-typography';

export type MenuSubheadingProps = SubheadingProps;

export const MenuSubheading = (props: MenuSubheadingProps) => {
  const {
    children,
    testId = 'cf-ui-menu-subheading',
    className,
    ...otherProps
  } = props;

  const styles = getMenuSubheadingStyles();

  return (
    <Subheading
      testId={testId}
      className={cx(styles, className)}
      marginBottom="none"
      {...otherProps}
    >
      {children}
    </Subheading>
  );
};
