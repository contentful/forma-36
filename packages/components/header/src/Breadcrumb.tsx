import React, { MouseEventHandler } from 'react';
import { Button } from '@contentful/f36-button';
import { Segmentation } from './Segmentation';
import { getBreadcrumbStyles } from './Breadcrumb.styles';

type Breadcrumb = {
  content: string;
  url: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export type BreadcrumbProps = {
  breadcrumbs: Breadcrumb[];
};

export const Breadcrumb = ({ breadcrumbs, ...otherProps }: BreadcrumbProps) => {
  const styles = getBreadcrumbStyles();
  const segments = breadcrumbs.map((breadcrumb) => {
    const handleBreadcrumbClick = breadcrumb.onClick;
    return (
      <Button
        as="a"
        className={styles.button}
        href={breadcrumb.url}
        key={breadcrumb.url}
        size="small"
        variant="transparent"
        onClick={handleBreadcrumbClick}
      >
        {breadcrumb.content}
      </Button>
    );
  });
  return <Segmentation segments={segments} {...otherProps} />;
};

Breadcrumb.displayName = 'Breadcrumb';
