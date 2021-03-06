import React from 'react';

import ProductIcon, { ProductIconProps } from './ProductIcon';
import {
  productIconName,
  productIconSize,
  productIconColor,
  productIconTag,
} from './constants';
import { Flex } from '../Flex';
import { Paragraph, SectionHeading } from '../Typography';

export default {
  title: '(alpha)/ProductIcon',
  component: ProductIcon,
  parameters: {
    propTypes: [ProductIcon['__docgenInfo']],
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

export const overview = () => (
  <>
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Product icon overview</SectionHeading>
    </Flex>
    {Object.keys(productIconName).map((icon, idx) => (
      <Flex marginBottom="spacingM" alignItems="center" key={idx}>
        <Flex marginRight="spacingS">
          <ProductIcon icon={icon as any} size="large" color="positive" />
        </Flex>
        <Paragraph>{icon}</Paragraph>
      </Flex>
    ))}
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Product icon sizes overview</SectionHeading>
    </Flex>
    {productIconSize.map((size, idx) => (
      <Flex marginBottom="spacingM" alignItems="center" key={idx}>
        <Flex marginRight="spacingS">
          <ProductIcon
            icon="ContentModel"
            size={size as any}
            color="positive"
          />
        </Flex>
        <Paragraph>{size}</Paragraph>
      </Flex>
    ))}
    <Flex marginBottom="spacingS">
      <SectionHeading element="h3">Product icon colors overview</SectionHeading>
    </Flex>
    {productIconColor.map((color, idx) => (
      <Flex marginBottom="spacingM" alignItems="center" key={idx}>
        <Flex marginRight="spacingS">
          <ProductIcon icon="ContentModel" size="medium" color={color as any} />
        </Flex>
        <Paragraph>{color}</Paragraph>
      </Flex>
    ))}
  </>
);

basic.args = {
  icon: 'Apis',
  size: 'large',
  color: 'positive',
  tag: 'div',
};
