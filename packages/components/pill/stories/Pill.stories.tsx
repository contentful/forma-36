import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Pill } from '../src/Pill';
import type { PillProps } from '../src/Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
  parameters: {
    propTypes: Pill['__docgenInfo'],
  },
  argTypes: {
    label: { control: { type: 'text' } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    onClose: { control: { disable: true } },
    onDrag: { control: { disable: true } },
    dragHandleComponent: { control: { disable: true } },
    variant: { control: { disable: true } },
  },
} as Meta;

export const Default: Story<PillProps> = (args: PillProps) => (
  <Pill label={args.label} />
);

Default.args = { label: 'example.user@contentful.com' };
