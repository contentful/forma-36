import React from 'react';

import Icon, { IconProps } from './Icon';
import { iconName, iconSize, iconColor } from './constants';
import notes from './README.mdx';

export default {
  title: 'components/Icon',
  component: Icon,
  parameters: {
    propTypes: Icon['__docgenInfo'],
    notes,
  },
  argTypes: {
    icon: { control: { type: 'select', options: iconName } },
    size: { control: { type: 'select', options: iconSize } },
    color: { control: { type: 'select', options: iconColor } },
  },
};

export const basic = (args: IconProps) => (
  <Icon
    icon={args.icon}
    size={args.size}
    color={args.color}
  />
);

basic.args = {
  size: 'large',
  color: 'positive',
  icon: 'ArrowDown'
}