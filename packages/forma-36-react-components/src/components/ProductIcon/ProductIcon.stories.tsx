import React from 'react';

import ProductIcon, { ProductIconProps } from './ProductIcon';
import {
  productIconName,
  productIconSize,
  productIconColor,
  productIconTag,
} from './constants';
import notes from './README.mdx';

export default {
  title: '(alpha)/ProductIcon',
  component: ProductIcon,
  parameters: {
    propTypes: [ProductIcon['__docgenInfo']],
    notes,
  },
  argTypes: {
    icon: { control: { type: 'select', options: productIconName } },
    size: { control: { type: 'select', options: productIconSize } },
    color: { control: { type: 'select', options: productIconColor } },
    tag: { control: { type: 'select', options: productIconTag } },
  },
};

export const basic = (args: ProductIconProps) => (
  <ProductIcon
    icon={args.icon}
    size={args.size}
    color={args.color}
    tag={args.tag}
  />
);

basic.args = {
  icon: 'Apis',
  size: 'large',
  color: 'positive',
  tag: 'div',
};
