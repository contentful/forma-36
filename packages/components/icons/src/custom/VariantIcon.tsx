import React from 'react';
import { css, cx } from '@emotion/css';
import type { GeneratedIconProps } from '@contentful/f36-icon';
import { GitBranchIcon } from '../vendor/phosphor/GitBranchIcon';

const rotatedClassName = css({
  transform: 'rotate(90deg)',
  transformOrigin: 'center',
});

export const VariantIcon = ({ className, ...props }: GeneratedIconProps) => {
  return (
    <GitBranchIcon {...props} className={cx(rotatedClassName, className)} />
  );
};
