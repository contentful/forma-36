import React from 'react';
import { Button } from '@contentful/f36-button';
import { Segmentation } from './Segmentation';
import { getBreadcrumbStyles } from './Breadcrumb.styles';

type Breadcrumb = {
  content: string;
  url: string;
};

export type BreadcrumbProps = {
  breadcrumbs: Breadcrumb[];
};

export const Breadcrumb = ({ breadcrumbs, ...otherProps }: BreadcrumbProps) => {
  const styles = getBreadcrumbStyles();
  const segments = breadcrumbs.map((breadcrumb) => (
    <Button
      as="a"
      className={styles.button}
      href={breadcrumb.url}
      key={breadcrumb.url}
      size="small"
      variant="transparent"
    >
      {breadcrumb.content}
    </Button>
  ));

  return <Segmentation segments={segments} {...otherProps} />;
};
